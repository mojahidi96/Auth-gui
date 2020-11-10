import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items: any[];
  taxPercent: number = 18;
  tax: any = 0;
  grandTotal: any = 0;
  total: any;

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('cart'));
    // this.items = this.productService.cartList;
    console.log(this.items)
  }

  incrementQty(index) {
    this.productService.addToCart(this.items[index]);
  }

  decrementQty(index) {
    this.productService.removeFromCart(index);
    if (this.items.length <= 0) {
      this.cancel();
    }
  }

  removeFromCart(index) {
    this.productService.cartList[index].quantity = 1;
    this.productService.removeFromCart(index);
    if (this.items.length <= 0) {
      this.cancel();
    }
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
  }

  getTotal() {
    if (this.items.length > 0) {
      this.total = this.items.length > 1 ? this.items.reduce((a, b) => ({ quantity: a.quantity, price: ((parseFloat(a.price) * a.quantity) + (parseFloat(b.price) * b.quantity)) })).price :
        parseFloat(this.items[0].price) * this.items[0].quantity;
      this.tax = (this.taxPercent / 100) * this.total;
      return this.total;
    }
  }

  getGrandTotal() {
    return (this.total + this.tax);
  }
}
