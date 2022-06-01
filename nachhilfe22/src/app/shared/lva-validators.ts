import { Observable } from 'rxjs';
import { FormControl, FormArray } from '@angular/forms';
import {LvaStoreService} from "./lva-store.service";
import {map} from 'rxjs/operators';

export class LvaValidators {

  static idExists(bs : LvaStoreService) {
    return function(control: FormControl): Observable<{[error: string]: any}> {
      // @ts-ignore
      return bs.check(control.value)
        .pipe(map(exists => !exists ? null : {idExists: {valid: false}}));
    }
  }
}
