import {Component, Input, OnInit} from '@angular/core';
import {Lva} from "../shared/lva";

@Component({
  selector: 'a.bs-lva-list-item',
  templateUrl: './lva-list-item.component.html',
  styles: []
})
export class LvaListItemComponent implements OnInit {
  @Input() lva: Lva | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
