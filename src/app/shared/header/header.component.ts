import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService._cartSubject.subscribe(cart => {
      this.cartCount = cart;
    })
  }

  public updateSearch(searchTextValue: string) {
    this.productService._searchSubject.next(searchTextValue);
  }
}
