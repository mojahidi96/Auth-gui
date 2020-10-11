import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ErrorComponent }])
  ]
})
export class ErrorModule { }
