import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CustomModalComponent,
    AppNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  entryComponents: [

    CustomModalComponent
  ],
  exports: [CustomModalComponent,
    AppNavbarComponent]
})
export class SharedModule {
}
