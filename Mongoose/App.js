"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var RestaurantController_1 = require("./controller/RestaurantController");
var RestaurantMenuController_1 = require("./controller/RestaurantMenuController");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Restaurant = new RestaurantController_1.RestaurantController();
        this.RestaurantMenu = new RestaurantMenuController_1.RestaurantMenuController();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //Add restaurant
        router.post('/app/addRestaurant/', function (req, res) {
            var jsonObj = req.body;
            console.log('Adding a restaurant: ' + jsonObj);
            _this.Restaurant.addRestaurant(res, jsonObj);
        });
        //Display restaurant with specific id
        router.get('/app/restaurantList/:restaurantId', function (req, res) {
            var id = req.params.restaurantId;
            console.log('Query single restaurant with id: ' + id);
            _this.Restaurant.retrieveRestaurantDetails(res, { _id: id });
        });
        //Display all restaurant List
        router.get('/app/restaurantList/', function (req, res) {
            console.log('Query All Restaurants');
            _this.Restaurant.retrieveAllRestaurantLists(res);
        });
        //Display menu of a specific restaurant
        router.get('/app/restaurantMenu/:restaurantId', function (req, res) {
            var id = req.params.restaurantId;
            console.log('Query single restaurant menu with id: ' + id);
            _this.RestaurantMenu.retrieveMenuDetails(res, { restaurantId: id });
        });
        //Display a specific menu from restaurant menu
        router.get('/app/restaurantMenuItem/:itemId', function (req, res) {
            var id = req.params.itemId;
            _this.RestaurantMenu.retrieveMenuDetails(res, { _id: id });
        });
        //Add menu for a specific restaurant
        router.post('/app/addRestaurantMenuItem/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            _this.RestaurantMenu.model.create([jsonObj], function (err, response) {
                if (err) {
                    console.log('Restaurant not added');
                }
                res.send(response);
            });
        });
        //Delete a specific menu from specific restaurant 
        router["delete"]('/app/restaurantMenuItem/:itemId', function (req, res) {
            var id = req.params.itemId;
            _this.RestaurantMenu.deleteMenuItem(res, { _id: id });
        });
        //Delete a specific restauarant
        router["delete"]('/app/deleteRestaurant/:restaurantId', function (req, res) {
            var id = req.params.restaurantId;
            console.log('Restaurant deleted');
            _this.Restaurant.deleteRestaurant(res, { _id: id });
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
