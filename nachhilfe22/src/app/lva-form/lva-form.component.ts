import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validator, FormControl, Validators} from "@angular/forms";
import { LvaFormErrorMessages } from "./lva-form-error-messages";
import { LvaFactory } from "../shared/lva-factory";
import { LvaStoreService } from "../shared/lva-store.service";
import { Lva, Termin } from "../shared/lva";
import {LvaValidators} from "../shared/lva-validators";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-lva-form',
  templateUrl: './lva-form.component.html',
})
export class LvaFormComponent implements OnInit {
  lvaForm: FormGroup;
  lva = LvaFactory.empty();
  errors: {[key: string]: string} = {};
  isUpdatingLva = false;
  termin: FormArray;

  constructor(
    private fb: FormBuilder,
    private bs: LvaStoreService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.lvaForm = this.fb.group({});
    this.termin = this.fb.array([]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingLva = true;
      this.bs.getSingle(id).subscribe(lva => {
        this.lva = lva;
        this.initLva();
      });
    }
    this.initLva();
  }

  initLva(){
    this.buildThumbnailsArray();
    this.lvaForm = this.fb.group({
      id: this.lva.id,
      name: this.lva.name,
      level: this.lva.level,
      termin: this.termin,
      description: this.lva.description
    });
    this.lvaForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  buildThumbnailsArray(){
    if(this.lva.termins){
      this.termin = this.fb.array([]);
      for(let term of this.lva.termins){
        let fg = this.fb.group({
          id: term.id,
          date: this.formatDate(term.date)
        });
        this.termin.push(fg);
      }
    }
  }

  formatDate(termin: Date){
    termin = new Date(termin);
    let year = termin.getFullYear();
    let month = termin.getMonth()+1;
    let day = termin.getDate();

    let monthZero = "";
    if(month < 10){
      monthZero = "0";
    }

    let dayZero = "";
    if(day < 10){
      dayZero = "0";
    }

    let newDate = year+"-"+monthZero+month+"-"+dayZero+day;

    return termin;
  }

  addThumbnailControl() {
    this.termin.push(this.fb.group({ id: 0, date: null}));
  }

  submitForm(){
    /*this.lvaForm.value.termin = this.lvaForm.value.termin.filter(
      (date: {date: string;}) => date.date
    );*/

    const lva: Lva = LvaFactory.fromObject(this.lvaForm.value);
    lva.nachhilfegeber = this.lva.nachhilfegeber;

    if(this.isUpdatingLva){
      this.bs.update(lva).subscribe(res=>{
        this.router.navigate(["../../lvas", lva.id], {
          relativeTo: this.route
        });
      })
    }else{
      lva.nachhilfegeber.id = 1;
      console.log(lva);
      this.bs.create(lva).subscribe(res=>{
        this.lva = LvaFactory.empty();
        this.lvaForm.reset(LvaFactory.empty());
        this.router.navigate(["../lvas"], {relativeTo: this.route});
      });
    }
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.lvaForm.invalid);
    this.errors = {};
    for (const message of LvaFormErrorMessages) {
      const control = this.lvaForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
