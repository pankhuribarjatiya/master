"use strict";
exports.__esModule = true;
exports.RestaurantController = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantController = /** @class */ (function () {
    function RestaurantController() {
        this.createSchema();
        this.createModel();
    }
    RestaurantController.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantName: String,
            restaurantAddress: String,
            phoneNumber: String
        }, { collection: 'restaurants' });
    };
    RestaurantController.prototype.createModel = function () {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    };
    RestaurantController.prototype.retrieveAllRestaurantLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RestaurantController.prototype.retrieveRestaurantDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RestaurantController.prototype.deleteRestaurant = function (response, filter) {
        var query = this.model.remove(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RestaurantController;
}());
exports.RestaurantController = RestaurantController;
