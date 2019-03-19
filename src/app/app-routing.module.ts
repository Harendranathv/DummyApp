import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { ThirdComponent } from './third/third.component';
import { NotFounfComponent } from './not-founf/not-founf.component';

import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  
 {path: 'next',  children:[
    {path: '', component: NextComponent},
   {path: 'login', component: LoginComponent}

  ]},
  {path: 'third', component: ThirdComponent},
  { path: 'login', component: LoginComponent },
  { path: 'Cart', component: CartComponent },

 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: '**', component: NotFounfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
