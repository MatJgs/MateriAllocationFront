import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {ListeRoomComponent} from "./components/fonction/liste-room/liste-room.component";
import {CreerRequestComponent} from "./components/fonction/creer-request/creer-request.component";
import {AcceptRequestComponent} from "./components/fonction/accept-request/accept-request.component";
import { CreerRoomComponent } from './components/fonction/creer-room/creer-room.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ListeRoomComponent,
    CreerRequestComponent,
    AcceptRequestComponent,
    Page404Component,
    HeaderComponent,
    CreerRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
