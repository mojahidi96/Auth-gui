import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SpinnerComponent } from './spinner-overlay/spinner-overlay.component';



@NgModule({
  declarations: [NotificationComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationComponent, SpinnerComponent]
})
export class SharedModule { }
