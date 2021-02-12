"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var RestaurantList = require("./controller/RestaurantController");
var MenuList = require("./controller/RestaurantMenuController");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Lists = new RestaurantList.RestaurantController();
        this.Menu = new MenuList.RestaurantMenuController();
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
        // router.get('/app/list/:listId/count', function (req, res) {
        //     var id = req.params.listId;
        //     console.log('Query single list with id: ' + id);
        //     _this.Menu.retrieveTasksCount(res, { listId: id });
        // });

        router.post('/app/restaurantList/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = _this.idGenerator;
            _this.Lists.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/restaurantList/:restaurantId', function (req, res) {
            var id = req.params.listId;
            console.log('Query single restaurant with id: ' + id);
            _this.Menu.retrieveMenuDetails(res, { listId: id });
        });
        router.get('/app/restaurantList/', function (req, res) {
            console.log('Query All list');
            _this.Lists.retrieveAllRestaurantLists(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
