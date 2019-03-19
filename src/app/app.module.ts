import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { NotFounfComponent } from './not-founf/not-founf.component';

import { LoginComponent } from './login/login.component';

import { ThirdComponent } from './third/third.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data.service';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NextComponent, ThirdComponent, NotFounfComponent, LoginComponent, DetailsComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule,
    InMemoryWebApiModule.forRoot(UserData),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
