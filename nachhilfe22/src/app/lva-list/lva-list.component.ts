import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Lva, Nachhilfegeber, Termin} from "../shared/lva";
import {LvaStoreService} from "../shared/lva-store.service";

@Component({
  selector: 'bs-lva-list',
  templateUrl: './lva-list.component.html',
  styles: []
})
export class LvaListComponent implements OnInit {

  lvas: Lva[] = [];

  //@Output() showDetailsEvent = new EventEmitter<Lva>();

  constructor(private bs: LvaStoreService) { }


  ngOnInit(){
    this.bs.getAll().subscribe(res => this.lvas = res);
  }

  /*showDetails(lva: Lva){
    this.showDetailsEvent.emit(lva);
  }*/

}
