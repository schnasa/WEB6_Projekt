import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LvaDetailsComponent} from "./lva-details/lva-details.component";
import {LvaListComponent} from "./lva-list/lva-list.component";
import {HomeComponent} from "./home/home.component";
import {LvaFormComponent} from "./lva-form/lva-form.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  { path: 'lvas', component: LvaListComponent },
  { path: 'lvas/:id', component: LvaDetailsComponent },
  { path: 'admin', component: LvaFormComponent},
  { path: 'admin/:id', component: LvaFormComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
