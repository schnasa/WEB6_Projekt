import {Lva, Nachhilfegeber, Termin} from './lva';

export class LvaFactory {
  static empty(): Lva {
    return new Lva(0, '', '',
      new Nachhilfegeber(0, '', '', '', ''),
      [new Termin(0, new Date(), 0, '')], '');
  }
  static fromObject(rawLva: any): Lva {
    return new Lva(
      rawLva.id,
      rawLva.name,
      rawLva.level,
      rawLva.nachhilfegeber,
      rawLva.termin,
      rawLva.description,
    );
  }
}
