import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'admin-dashboard',
        loadChildren: () => import ('src/app/pages/administrador/administrador.module').then(m => m.AdministradorModule)
      }
    ]
  },
  { path: 'login', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
