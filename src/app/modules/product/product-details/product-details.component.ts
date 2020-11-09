import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() selectedProduct;
  @Output() backToListevent = new EventEmitter;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  backToList() {
    this.backToListevent.emit();
  }

}
