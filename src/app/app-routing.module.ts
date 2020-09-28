import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent ,BrandUpdateComponent ,BrandCreateComponent } from './brand/';
import { ProductListComponent , ProductCreateComponent , ProductUpdateComponent } from './product/';



const routes: Routes = [
 {
    path: "product/list",
    component: ProductListComponent
 },
 {
    path: "product/create",
    component: ProductCreateComponent
 },
 {
    path: "product/update/:id",
    component: ProductUpdateComponent
 },
 {
    path: "brand/list",
    component: BrandListComponent
 },
 {
   path: "brand/create",
   component: BrandCreateComponent
 },
 {
   path: "brand/update/:id",
   component: BrandUpdateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
