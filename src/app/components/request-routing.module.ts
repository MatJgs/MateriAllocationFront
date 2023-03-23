import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListeRequestComponent} from "./fonction/liste-request/liste-request.component";
import {CreerRequestComponent} from "./fonction/creer-request/creer-request.component";
import {AcceptRequestComponent} from "./fonction/accept-request/accept-request.component";
const routes: Routes = [
  {path:'', component:ListeRequestComponent,pathMatch:'full'},
  {path:'create',component:CreerRequestComponent},
  {path:'accept',component:AcceptRequestComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {

}
