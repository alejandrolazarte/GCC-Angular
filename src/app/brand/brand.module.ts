import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandUpdateComponent } from './brand-update/brand-update.component';


@NgModule({
  declarations: [BrandListComponent, BrandCreateComponent, BrandUpdateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BrandModule {
}



