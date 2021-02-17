import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import {RestaurantController} from './controller/RestaurantController';
import {RestaurantMenuController} from './controller/RestaurantMenuController';
import {DataAccess} from './DataAccess';
import { isThisTypeNode } from 'typescript';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Restaurant:RestaurantController;
  public RestaurantMenu:RestaurantMenuController;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
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
    
  //API for adding restaurant in the database
  router.post('/app/addRestaurant/', (req, res) => {
      console.log(req.body);
      var jsonObj = req.body;
      this.Restaurant.model.create([jsonObj], (err, response) => {
          if (err) {
              console.log('Restaurant not added');
          }
          console.log(response);
          res.send(response);
      });
  });

    //Display restaurant with specififc id
    router.get('/app/restaurantList/:restaurantId', (req, res) => {
        var id = req.params.restaurantId;
        console.log('Query single restaurant with id: ' + id);
        this.Restaurant.retrieveRestaurantDetails(res, {_id: id});
    });

    //Display all restaurant List
    router.get('/app/restaurantList/', (req, res) => {
        console.log('Query All Restaurants');
        this.Restaurant.retrieveAllRestaurantLists(res);
    });

    //Display menu of a specific restaurant
    router.get('/app/restaurantMenu/:restaurantId', (req, res) => {
      var id = req.params.restaurantId;
      console.log('Query single restaurant menu with id: ' + id);
      this.RestaurantMenu.retrieveMenuDetails(res, {restaurantId: id});
  });

  //Display a specific menu from restaurant menu
  router.get('/app/restaurantMenuItem/:itemId', (req, res) => {
    var id = req.params.itemId;
    this.RestaurantMenu.retrieveMenuDetails(res, {_id: id});
});




//Add menu for a specific restaurant

router.post('/app/addRestaurantMenuItem/', (req, res) => {
  console.log(req.body);
  var jsonObj = req.body;
  this.RestaurantMenu.model.create([jsonObj], (err, response) => {
      if (err) {
          console.log('Restaurant not added');
      }
      
      res.send(response);
  });
  
});

//Delete a specific menu from specific restaurant 
router.delete('/app/restaurantMenuItem/:itemId', (req, res) => {

  var id = req.params.itemId;
  this.RestaurantMenu.deleteMenuItem(res, {_id : id});

});

//Delete a specific restauarant
router.delete('/app/deleteRestaurant/:restaurantId', (req, res) => {
    var id = req.params.restaurantId;
    console.log('Restaurant deleted');
    this.Restaurant.deleteRestaurant(res, {_id: id});
});

this.expressApp.use('/', router);
this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
this.expressApp.use('/images', express.static(__dirname+'/img'));
this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};