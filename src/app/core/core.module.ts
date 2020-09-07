import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopbarComponent} from './layout/topbar/topbar.component';
import { ContainerComponent } from './layout/container/container.component';


@NgModule({
  declarations: [TopbarComponent, ContainerComponent],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
