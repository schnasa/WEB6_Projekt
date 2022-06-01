import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LvaListComponent } from './lva-list/lva-list.component';
import { LvaListItemComponent } from './lva-list-item/lva-list-item.component';
import { LvaDetailsComponent } from './lva-details/lva-details.component';
import {LvaStoreService} from "./shared/lva-store.service";
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LvaFormComponent } from './lva-form/lva-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import {LOCALE_ID} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    LvaListComponent,
    LvaListItemComponent,
    LvaDetailsComponent,
    HomeComponent,
    LvaFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [LvaStoreService, AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
