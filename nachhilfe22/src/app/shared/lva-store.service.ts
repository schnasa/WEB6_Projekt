import { Injectable } from '@angular/core';
import {Lva, Nachhilfegeber, Termin} from "./lva";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {Ersatztermin} from "./ersatztermin";


@Injectable()
export class LvaStoreService {
  private api = 'http://nachhilfe22.s1910456029.student.kwmhgb.at/api'


  constructor(private http: HttpClient) {  }

  getAll() : Observable<Array<Lva>>{
    return this.http.get<Array<Lva>>(`${this.api}/lvas`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id : number) : Observable<Lva>{
    return this.http.get<Lva>(`${this.api}/lvas/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  create(lva: Lva): Observable<any> {
    return this.http.post(`${this.api}/lvas`, lva)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  update(lva: Lva): Observable<any> {
    return this.http.put(`${this.api}/lva/${lva.id}`, lva)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/lva/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  check(id: number): Observable<Boolean> {
    return this.http.get<Boolean>(`${this.api}/lvas/checkid/${id}`)
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  updateTermin(termin: Termin): Observable<any> {
    return this.http.put(`${this.api}/termin/${termin.id}`, termin)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  createErsatzTermin(ersatzTermin: Ersatztermin) {
    return this.http.post(`${this.api}/ersatztermin`, ersatzTermin)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getAllErsatztermine() : Observable<Array<Ersatztermin>>{
    return this.http.get<Array<Ersatztermin>>(`${this.api}/ersatztermins`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
}
