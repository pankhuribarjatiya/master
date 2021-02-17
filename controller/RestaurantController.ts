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
                restaurantAddress: String,
                phoneNumber: String,
            }, {collection: 'restaurants'}
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

    public retrieveRestaurantDetails(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }


    public deleteRestaurant(response:any, filter:Object) {
        var query = this.model.remove(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {RestaurantController}