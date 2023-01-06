import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheeseComponent } from './cheese/cheese.component';
import { FormsModule } from "@angular/forms";
import { CheeseService } from "./services/cheese/cheese.service";
import { HomeComponent } from './home/home.component';
import { CheeseListComponent } from './cheese-list/cheese-list.component';
import { CheeseUpdateComponent } from './cheese-update/cheese-update.component';
import { CheeseNewComponent } from './cheese-new/cheese-new.component';

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheeseComponent,
    HomeComponent,
    CheeseListComponent,
    CheeseUpdateComponent,
    CheeseNewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    CheeseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
