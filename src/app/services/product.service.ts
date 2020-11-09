import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _searchSubject: Subject<string> = new Subject();
  public _cartSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  public cartList: any[] = [];
  constructor() { }

  addToCart(item) {
    let isItemInCart = this.cartList.indexOf(item);
    if (isItemInCart < 0) {
      item.quantity = 1;
      item.cost = item.price * item.quantity;
      this.cartList.push(item);
    }
    else {
      let cartItem = this.cartList[isItemInCart];
      cartItem.quantity++;
      cartItem.cost = parseFloat(item.price) * cartItem.quantity;
    }
    let cartCount = this.cartList.reduce((a, b) => ({ quantity: a.quantity + b.quantity }));
    this._cartSubject.next(cartCount.quantity);
    localStorage.setItem('cart', JSON.stringify(this.cartList))
  }
}
