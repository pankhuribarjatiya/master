import { Menu } from './menu';


export class CartItem {
  id: Number;
  menuId: Number;
  itemName: String;
  qty: number;
  itemPrice: Number;

  constructor(id: Number, menu: Menu, qty = 1) {
    this.id = id;
    this.menuId = menu._id;
    this.itemName = menu.itemName;
    this.itemPrice = menu.itemPrice;
    this.qty = qty;
  }
}
