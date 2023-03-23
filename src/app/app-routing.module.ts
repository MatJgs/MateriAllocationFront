import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'requests'},
  {path: 'requests', loadChildren:() => import('./components/requests.module').then(p => p.RequestsModule)},
  { path:'404',component:Page404Component},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
