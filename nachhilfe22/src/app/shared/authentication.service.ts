import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";
import {BehaviorSubject} from "rxjs";
import {Nachhilfegeber} from "./nachhilfegeber";
import {Suchender} from "./suchender";
import jwtDecode from "jwt-decode";

interface Token {
  exp: number;
  nachhilfegeber: {
    id: string;
  };
  suchender: {
    id: string;
  }
}

@Injectable()
export class AuthenticationService {
  private api: string = "http://nachhilfe22.s1910456029.student.kwmhgb.at/api/auth";

  isNachhilfegeber = new BehaviorSubject<boolean>(false);
  isSuchender = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }


  //Suchender und Nachhilfegeber
  login(loginType: "nachhilfegeber" | "suchender", email: string, password: string) {
    return this.http.post(loginType === "nachhilfegeber" ? `${this.api}/login` : `${this.api}/login/suchender`, {
      email: email,
      password: password
    });
  }

  public getCurrentUserId(loginType: "nachhilfegeber" | "suchender") {
    return Number.parseInt(loginType === "nachhilfegeber" ?
      <string>sessionStorage.getItem("nachhilfegeberId") :
      <string>sessionStorage.getItem("suchenderrId"));
  }

  public setSessionStorage(token: string) {
    //console.log("Storing token");
    //console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    //console.log(decodedToken);
    //console.log(decodedToken.nachhilfegeber.id);
    sessionStorage.setItem("token", token);
    if (decodedToken.nachhilfegeber) {
      sessionStorage.setItem("nachhilfegeberId", decodedToken.nachhilfegeber.id);
    } else {
      sessionStorage.setItem("suchenderId", decodedToken.suchender.id);
    }
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nachhilfegeberId");
    sessionStorage.removeItem("suchenderId");
    //console.log("logged out");
  }

  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = <string>sessionStorage.getItem("token");
      //console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCDate(decodedToken.exp);
      if (expirationDate < new Date()) {
        //console.log("token expired");
        sessionStorage.removeItem("token");
        this.isSuchender.next(false);
        return false;
      } else {
        if (decodedToken.nachhilfegeber) this.isNachhilfegeber.next(true);
        else {
          this.isNachhilfegeber.next(false);
        }
        this.isSuchender.next(true);
        return true;
      }
    }
    this.isSuchender.next(false);
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  isAdmin(){
    return sessionStorage.getItem("nachhilfegeberId");
  }



}

