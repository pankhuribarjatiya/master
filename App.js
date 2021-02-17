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
 // public idGenerator:number;
 //Run configuration methods on the Express instance.
 function App() {
 this.expressApp = express();
 this.middleware();
 this.routes();
 //this.idGenerator = 100;
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
 
 //POST -working for adding restaurtant using mongodb
 router.post('/app/addRestaurant/', function (req, res) {
 console.log(req.body);
 var jsonObj = req.body;
 _this.Restaurant.model.create([jsonObj], function (err, response) {
 if (err) {
 console.log('Restaurant not added');
 }
 console.log(response);
 res.send(response);
 });
 //this.idGenerator++;
 });
 
 //GET - working for fetching details of all the restaurants
 router.get('/app/restaurantList/', function (req, res) {
 console.log('Query All Restaurants');
 _this.Restaurant.retrieveAllRestaurantLists(res);
 });
 
 // GET - not working --
 router.get('/app/restaurantList/:restaurantId', function (req, res) {
    var id = req.params.restaurantId;
    console.log('Query single restaurant with id: ' + id);
    _this.Restaurant.retrieveRestaurantDetails(res, { _id: id });
 });
 
 // GET - yeayy its working -- app/restaurantMenu/1 -- getting all details as reference to id 1
    router.get('/app/restaurantMenu/:restaurantId', function (req, res) {
    var id = req.params.restaurantId;
    console.log('Query single restaurant menu with id: ' + id);
    _this.RestaurantMenu.retrieveMenuDetails(res, { restaurantId: id });
 });
 
 
 router.get('/app/restaurantMenuItem/:itemId', function (req, res) {
 var id = req.params.itemId;
 _this.RestaurantMenu.retrieveMenuDetails(res, { _id: id });
 });
 router.post('/app/restaurantMenuItem/', function (req, res) {
 console.log(req.body);
 var jsonObj = req.body;
 _this.RestaurantMenu.model.create([jsonObj], function (err, response) {
 if (err) {
 console.log('Restaurant not added');
 }
 res.send(response);
 });
 });
 router["delete"]('/app/restaurantMenuItem/:itemId', function (req, res) {
 var id = req.params.itemId;
 _this.RestaurantMenu.deleteMenuItem(res, { _id: id });
 });
 this.expressApp.use('/', router);
 this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
 this.expressApp.use('/images', express.static(__dirname + '/img'));
 this.expressApp.use('/', express.static(__dirname + '/pages'));
 };
 return App;
}());
exports.App = App;