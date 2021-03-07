export interface Menu {
  // id: number;
  // name: string;
  // description: string;
  // price: number;
  // imageUrl: string;
  _id:number;
  restaurantId: number;
  itemName: String;
  itemDescription: String;
  itemPrice: Number;
  menuItemImageUrl: string;

  // constructor(id, name, description = '', price = 0, imageUrl = '') {
  //   this._id = id
  //   this.itemName = name
  //   this.itemDescription = description
  //   this.itemPrice = price
  //   //this.imageUrl = imageUrl
  // }
}
