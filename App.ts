import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {RestaurantController} from './controller/RestaurantController';
import {RestaurantMenuController} from './controller/RestaurantMenuController';
import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Restaurant:RestaurantController;
  public RestaurantMenu:RestaurantMenuController;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Restaurant = new RestaurantController();
    this.RestaurantMenu = new RestaurantMenuController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // router.get('/app/list/:listId/count', (req, res) => {
    //     var id = req.params.listId;
    //     console.log('Query single list with id: ' + id);
    //     this.RestaurantMenu.retrieveRestaurantMenuCount(res, {listId: id});
    // });

    router.post('/app/restaurantList/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = this.idGenerator;
        this.Restaurant.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

    // Retrives the complete menu for a given restaurant id
    router.get('/app/restaurantList/:restaurantId/menuList', (req, res) => {
        var id = req.params.restaurantId;
        console.log('Query single restaurant with id: ' + id);
        this.RestaurantMenu.retrieveMenuDetails(res, { restaurantId: id });
    });

    router.get('/app/restaurantList/', (req, res) => {
        console.log('Query All Restaurants');
        this.Restaurant.retrieveAllRestaurantLists(res);
    });

    router.post('/app/addRestaurant/', (req, res) => {
      console.log(req.body);
      let jsonObj = req.body;
      this.Restaurant.model.create([jsonObj], (err) => {
        if (err) {
            console.log('object creation failed');
        }
      });
      res.send(this.idGenerator.toString());
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};