import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRestaurantMenu} from '../interfaces/IRestaurantMenu';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RestaurantMenuController {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                restaurantId: Number,
                restaurantMenu: [ {
                    itemId: Number,
                    itemName: String,
                    itemDescription: String,
                    itemPrice: Number,
                }]
            }, {collection: 'restaurantMenu'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantMenu>("Menu", this.schema);
    }
    
    public retrieveMenuDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    // public retrieveTasksCount(response:any, filter:Object) {
    //     var query = this.model.find(filter).select('tasks').count();
    //     query.exec( (err, numberOfTasks) => {
    //         console.log('number of tasks: ' + numberOfTasks);
    //         response.json(numberOfTasks);
    //     });
    // }

}
export {RestaurantMenuController};