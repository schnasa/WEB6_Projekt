import {Observable} from "rxjs";
import {Lva} from "./lva";
import {catchError, retry} from "rxjs/operators";

export class Ersatztermin {
  constructor(
    public id: number,
    public date: Date,
    public status: string,
    public suchender_id: number,
    public nachhilfegeber_id: number
  ) { }

}
