import {Termin} from "./termin";
export {Termin} from "./termin";
import {Nachhilfegeber} from "./nachhilfegeber";
export {Nachhilfegeber} from "./nachhilfegeber";

export class Lva {

  constructor(
    public id: number,
    public name: string,
    public level: string,
    public nachhilfegeber: Nachhilfegeber,
    public termins: Termin[],
    public description?: string
  ) {
  }
}
