import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SpinnerComponent } from './spinner-overlay/spinner-overlay.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [NotificationComponent, SpinnerComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationComponent, SpinnerComponent, HeaderComponent]
})
export class SharedModule { }
