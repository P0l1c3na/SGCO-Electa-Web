import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDasboardComponent} from './pages/admin-dasboard/admin-dasboard.component';

const routes: Routes = [
  {path: '', component: AdminDasboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
