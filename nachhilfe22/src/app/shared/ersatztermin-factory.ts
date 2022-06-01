import {Lva, Nachhilfegeber, Termin} from "./lva";
import {Ersatztermin} from "./ersatztermin";

export class ErsatzterminFactory {
  static empty(): Ersatztermin {
    return new Ersatztermin(0, new Date(), '',0,0);
  }
  static fromObject(rawErsatztermin: any): Ersatztermin {
    return new Ersatztermin(
      rawErsatztermin.id,
      rawErsatztermin.date,
      rawErsatztermin.status,
      rawErsatztermin.suchender_id,
      rawErsatztermin.nachhilfegeber_id,
    );
  }
}
