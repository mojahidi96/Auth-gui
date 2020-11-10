import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartCount: number;
  constructor(private productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.productService._cartSubject.subscribe(cart => {
      this.cartCount = cart;
    })
  }

  public updateSearch(searchTextValue: string) {
    this.productService._searchSubject.next(searchTextValue);
  }

  ngOnDestroy(): void {
    this.productService._cartSubject.unsubscribe();
  }

}
