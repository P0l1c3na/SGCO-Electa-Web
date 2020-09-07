import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopbarComponent} from './layout/topbar/topbar.component';


@NgModule({
  declarations: [TopbarComponent],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
