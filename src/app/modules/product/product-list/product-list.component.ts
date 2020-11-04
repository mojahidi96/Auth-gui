import { Component, OnInit } from '@angular/core';
import product from '../../../../mock-json/product.json'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  products
  ngOnInit(): void {
    this.products = this.generateRows(product.ProductCatalogResponse.ProductList.product);
    console.log(product.ProductCatalogResponse)
  }

  generateRows(list, numberOfColumns = 4) {
    let tempArray = [];
    for (let index = 0; index < list.length; index += 4) {
      tempArray.push(list.slice(index, index + numberOfColumns));
    }
    return tempArray
  }

}
