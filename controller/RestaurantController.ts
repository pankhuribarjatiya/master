import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRestaurant} from '../interfaces/IRestaurant';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RestaurantController{
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                restaurantName: String,
                restaurantId: Number,
                restaurantAddress: String,
                phoneNumber: String,
            }, {collection: 'restaurantList'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurant>("Restaurant", this.schema);
    }

    public retrieveAllRestaurantLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public addRestaurant(response:any, request:JSON): any {
        console.log("inserting payload:" + request);
        this.model.create([request], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        console.log("payload added successfully:" + request);
    }
}
export {RestaurantController}