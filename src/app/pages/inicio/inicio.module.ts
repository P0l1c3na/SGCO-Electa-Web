import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule
  ]
})
export class InicioModule { }
