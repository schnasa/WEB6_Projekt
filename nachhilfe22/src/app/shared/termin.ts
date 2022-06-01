export class Termin {

  constructor(
    public id: number,
    public date: Date,
    public suchender_id: number,    public status?: string,

    public gebucht?: boolean
  ) { }
}
