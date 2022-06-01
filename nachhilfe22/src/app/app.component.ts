import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";
//import {Lva} from "./shared/lva";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
  //template: '<bs-lva-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bs-lva-list>
  // <bs-lva-details *ngIf="detailsOn" [lva]="lva" (showListEvent)="showList()" )></bs-lva-details>'
})
export class AppComponent {
  constructor(public authService: AuthenticationService) { }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Mein Profil";
    } else {
      return "Login";
    }
  }
}


/*export class AppComponent {
  listOn = true;
  detailsOn = false;

  lva: Lva | undefined

  title = 'nachhilfe22';

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  showDetails(lva: Lva) {
    this.lva = lva;
    this.listOn = false;
    this.detailsOn = true;
  }
}*/
