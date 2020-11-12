import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  @Input() items: any[];
  @Input() isShoppingCartTab: boolean;
  taxPercent: number = 18;
  tax: any = 0;
  grandTotal: any = 0;
  total: any;
  isShowTexbox: boolean = false;
  constructor() { }

  ngOnInit(): void {
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
