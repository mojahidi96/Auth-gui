import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SummaryComponent } from './summary/summary.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductComponent, StarRatingComponent, ShoppingCartComponent, SummaryComponent, ShoppingDetailsComponent, PaymentOptionsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
