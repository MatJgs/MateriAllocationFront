import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "../app-routing.module";
import {CreerRequestComponent} from "./fonction/creer-request/creer-request.component";
import {AppComponent} from "../app.component";
import {ListeRequestComponent} from "./fonction/liste-request/liste-request.component";
import {RequestsService} from "../services/requests.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AcceptRequestComponent} from "./fonction/accept-request/accept-request.component";
import {RequestRoutingModule} from "./request-routing.module";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [

    CreerRequestComponent,
    AcceptRequestComponent,


  ],
  imports: [
    CommonModule,
    RequestRoutingModule,

    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RequestsService
  ]

})
export class RequestsModule { }
