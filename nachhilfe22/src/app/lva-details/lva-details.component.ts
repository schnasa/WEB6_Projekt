import {Component, OnInit} from '@angular/core';
import {Lva, Termin} from '../shared/lva';
import {LvaStoreService} from "../shared/lva-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LvaFactory} from "../shared/lva-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ersatztermin} from "../shared/ersatztermin";
import {ErsatzterminFactory} from "../shared/ersatztermin-factory";

@Component({
  selector: 'bs-lva-details',
  templateUrl: './lva-details.component.html',
  styles: []
})
export class LvaDetailsComponent implements OnInit {
  lva: Lva = LvaFactory.empty();
  messageForm: FormGroup;
  ersatzTermin: Ersatztermin = ErsatzterminFactory.empty();

  constructor(
    private bs: LvaStoreService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({});
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id']).subscribe(b => {
      this.lva = b;
    });
    this.init();

  }

  removeLva() {
    if (confirm('Lva wirklich löschen?')) {
      console.log(this.lva.id)
      this.bs.remove(this.lva.id)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  }

  book(termin: Termin) {
    termin.suchender_id = Number(sessionStorage.getItem("suchenderId"));
    termin.gebucht = true;
    console.log(termin);
    this.bs.updateTermin(termin).subscribe(a => {
      alert("Termin wurde erfolgreich gebucht!")
    });
  }

  submitForm() {
    const ersatzTermin: Ersatztermin = ErsatzterminFactory.fromObject(this.messageForm.value);
    console.log(ersatzTermin);
    ersatzTermin.nachhilfegeber_id = this.lva.nachhilfegeber.id;
    this.bs.createErsatzTermin(ersatzTermin).subscribe(res => {
      this.ersatzTermin = ErsatzterminFactory.empty();
      this.messageForm.reset(ersatzTermin);
      alert("Termin gesendet!");
    })
  }

  init(){
    console.log(this.lva);
    this.messageForm = this.fb.group({
      id: this.ersatzTermin.id,
      date: this.ersatzTermin.date,
      suchender_id: Number(sessionStorage.getItem("suchenderId")),
      nachhilfegeber_id:0
    })
  }
}
