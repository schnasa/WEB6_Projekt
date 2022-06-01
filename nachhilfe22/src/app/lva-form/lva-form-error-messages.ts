export class ErrorMessages {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {  }
}

export const LvaFormErrorMessages = [
  new ErrorMessages('name', 'required', 'Ein Name muss angegeben werden!'),
  new ErrorMessages('date', 'required', 'Es muss ein Datum eingegeben werden!'),
  new ErrorMessages('level', 'required', 'Es muss ein Level eingegeben werden!'),
  new ErrorMessages("id", "idExists", "Die ID existiert bereits!")
];
