"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var RestaurantController_1 = require("./controller/RestaurantController");
var RestaurantMenuController_1 = require("./controller/RestaurantMenuController");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
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
        // router.get('/app/list/:listId/count', (req, res) => {
        //     var id = req.params.listId;
        //     console.log('Query single list with id: ' + id);
        //     this.RestaurantMenu.retrieveRestaurantMenuCount(res, {listId: id});
        // });
        router.post('/app/restaurantList/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = _this.idGenerator;
            _this.Restaurant.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        // Retrives the complete menu for a given restaurant id
        router.get('/app/restaurantList/:restaurantId/menuList', function (req, res) {
            var id = req.params.restaurantId;
            console.log('Query single restaurant with id: ' + id);
            _this.RestaurantMenu.retrieveMenuDetails(res, { restaurantId: id });
        });
        router.get('/app/restaurantList/', function (req, res) {
            console.log('Query All Restaurants');
            _this.Restaurant.retrieveAllRestaurantLists(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
