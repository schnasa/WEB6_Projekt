import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthenticationService } from "../shared/authentication.service";
import { Nachhilfegeber } from "../shared/nachhilfegeber";
import {LvaDetailsComponent} from "../lva-details/lva-details.component";
import {LvaStoreService} from "../shared/lva-store.service";
import {Lva} from "../shared/lva";
import {LvaFactory} from "../shared/lva-factory";
import {Ersatztermin} from "../shared/ersatztermin";


interface Response{
  access_token: string;
}

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean = false;
  lvas: Lva[] = [];
  ersatztermins: Ersatztermin[] = [];

  @Input() nachhilfegeber: Nachhilfegeber | undefined
  @Output() user = new EventEmitter<Nachhilfegeber>();

  constructor(
    private bs: LvaStoreService,
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthenticationService,
    private route: ActivatedRoute

  ) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(){

    this.bs.getAll().subscribe(b => this.lvas = b);
    this.bs.getAllErsatztermine().subscribe(e => this.ersatztermins = e);

    this.authService.isSuchender.
    subscribe(loginState => this.loggedIn = loginState);

    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    window.setTimeout(()=>console.log(this.lvas),500)
  }

  login(loginType: "nachhilfegeber" | "suchender"){
    const val = this.loginForm.value;
    if(val.username && val.password){
      this.authService.login(loginType, val.username, val.password).subscribe((res: any) => {
        console.log(res);
        this.authService.setSessionStorage((res as Response).access_token);
        //NEU
        this.authService.isLoggedIn();
        //NEU
        this.router.navigateByUrl("/");
      });
    }
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }

}


