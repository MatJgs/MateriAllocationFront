import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";
import {ListeRoomComponent} from "./components/fonction/liste-room/liste-room.component";
import {CreerRequestComponent} from "./components/fonction/creer-request/creer-request.component";
import {AcceptRequestComponent} from "./components/fonction/accept-request/accept-request.component";
import {CreerRoomComponent} from "./components/fonction/creer-room/creer-room.component";


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'room-list'},
  {path: 'room-list', component:ListeRoomComponent},
  {path: 'room-create', component:CreerRoomComponent},
  {path:'request-create',component:CreerRequestComponent},
  {path:'request-accept',component:AcceptRequestComponent},
  { path:'404',component:Page404Component},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
