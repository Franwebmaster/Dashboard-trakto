import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//App Routing
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'panel'
  },

  {
    path: 'panel',
    loadChildren: './sistema/panel/panel.module#PanelModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
