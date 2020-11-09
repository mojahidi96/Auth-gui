import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ProductService } from 'src/app/services/product.service';
import product from '../../../../mock-json/product.json'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(public productService: ProductService) { }
  products
  selectedProduct
  txtSearch;
  rowProductList = product.ProductCatalogResponse.ProductList.product;
  ngOnInit(): void {
    this.products = this.generateRows(product.ProductCatalogResponse.ProductList.product);
    this.productService._searchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe(text => {
      this.filterProduct(text);
    });
  }

  generateRows(list, numberOfColumns = 4) {
    let tempArray = [];
    for (let index = 0; index < list.length; index += 4) {
      tempArray.push(list.slice(index, index + numberOfColumns));
    }
    return tempArray
  }

  setSelectedProduct(item) {
    this.selectedProduct = item;
    this.selectedProduct.recommendedItems = this.rowProductList.filter(rItem => item.recommendedItems.indexOf(rItem.itemCode) >= 0);
  }

  filterProduct(searchText) {
    const filterPipe = new FilterPipe();
    this.products = this.generateRows(filterPipe.transform(this.rowProductList, searchText));
  } 

  ngOnDestroy() {
    this.productService._searchSubject.unsubscribe();
  }

}
