import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandCreateComponent } from './brand/brand-create/brand-create.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { ProductListComponent , ProductCreateComponent} from './product/';



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
    path: "brand/list",
    component: BrandListComponent
 },
 {
   path: "brand/create",
   component: BrandCreateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
