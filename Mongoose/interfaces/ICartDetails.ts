import Mongoose = require("mongoose");

interface ICartDetails extends Mongoose.Document {
    
    
    CartId: number;
    custEmailId: string; 
    restaurantId: string;
    itemId: number; 
    itemName: string;
    itemPrice: number;
    qty: number;
}
export {ICartDetails};
