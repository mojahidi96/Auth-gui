import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { tabsName } from '../product.constant';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items: any[];
  currentTab: string = tabsName.shoppingCart;
  tabsName = tabsName;
  tabs: any[]
  constructor(public productService: ProductService, private router: Router) { }



  ngOnInit(): void {
    this.productService.cartList = JSON.parse(localStorage.getItem('cart'));
    this.items = this.productService.cartList;
    console.log(this.items);
    this.createTabs();
  }

  private createTabs() {
    this.tabs = Object.keys(this.tabsName).map(tab => ({ label: this.tabsName[tab], isComplete: false }));
    console.log(this.tabs)
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

  next() {
    let currentTabIndex = this.tabs.indexOf(this.tabs.find(tab => tab.label == this.currentTab));
    let local = ((this.tabs.length - 1) > currentTabIndex) ? (this.tabs[currentTabIndex].isComplete = true, this.currentTab = this.tabs[currentTabIndex + 1].label) : this.payNow();
    console.log(local);
  }

  payNow() {
    console.log('Pay now');
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
  }
}
