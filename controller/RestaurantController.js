"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantController = /** @class */ (function () {
    function RestaurantController() {
        this.createSchema();
        this.createModel();
    }
    RestaurantControllerprototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantName: string,
            restaurantId: number,
            restaurantAddress: string,
            phoneNumber: string,
        }, { collection: 'restaurantList' });
    };
    RestaurantControllerprototype.createModel = function () {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    };
    RestaurantControllerprototype.retrieveAllLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RestaurantController
}());
exports.RestaurantController= RestaurantController
