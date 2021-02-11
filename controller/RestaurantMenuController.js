"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantMenuController = /** @class */ (function () {
    function RestaurantMenuController() {
        this.createSchema();
        this.createModel();
    }
    RestaurantMenuController.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            itemId: Number,
            restaurantMenu: [{
                itemName: String,
                itemDescription: String,
                itemPrice: Number,
            }]
        }, { collection: 'restaurantMenu' });
    };
    RestaurantMenuController.prototype.createModel = function () {
        this.model = mongooseConnection.model("Menu", this.schema);
    };
    RestaurantMenuController.prototype.retrieveMenuDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    // RestaurantMenuController.prototype.retrieveTasksCount = function (response, filter) {
    //     var query = this.model.find(filter).select('tasks').count();
    //     query.exec(function (err, numberOfTasks) {
    //         console.log('number of tasks: ' + numberOfTasks);
    //         response.json(numberOfTasks);
    //     });
    // };
    return RestaurantMenuController;
}());
exports.RestaurantMenuController = RestaurantMenuController;
