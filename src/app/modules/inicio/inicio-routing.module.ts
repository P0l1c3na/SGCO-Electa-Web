import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'admin-dashboard',
    loadChildren: () => import ('src/app/modules/administrador/administrador.module').then(m => m.AdministradorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
