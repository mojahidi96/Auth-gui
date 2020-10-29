import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productRoutes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'details', component: ProductDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(productRoutes),
    CommonModule
  ]
})
export class ProductRoutingModule { }
