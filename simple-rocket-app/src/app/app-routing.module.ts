import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RocketInfoFormComponent } from './rocket-info-form/rocket-info-form.component';

const routes : Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'addinfo', component: RocketInfoFormComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
