import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(module => module.ProductModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(module => module.AboutModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(module => module.ErrorModule) },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
