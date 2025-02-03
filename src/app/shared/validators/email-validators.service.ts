import { HtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable , of, retry} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidators implements AsyncValidator {


  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log(control)
  //   return of({emailTaek:true}).pipe(delay(2000))

  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable =  new Observable<ValidationErrors| null>((subscriber)=>{
      console.log({email});

      if (email === "briant.macias2001@gmail.com") {
        subscriber.next({
          emailTaken:true,
        });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    }).pipe(delay(3000))

    return httpCallObservable;

  }


  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }




}
