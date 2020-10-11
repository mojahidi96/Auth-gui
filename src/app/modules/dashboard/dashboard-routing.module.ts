import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDetailsComponent } from './components/update-details/update-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: 'update', component: UpdateDetailsComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule, CommonModule]
  })
  export class DashboardRouting { }
// export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(routes)
