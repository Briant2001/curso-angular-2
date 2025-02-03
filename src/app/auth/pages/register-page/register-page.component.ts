import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidators } from 'src/app/shared/validators/email-validators.service';
// import { cantStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


    public myForms:FormGroup = this.fb.group({
      name:['',[ Validators.required ,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
      email:['',[ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ],[this.emailValidator]],
      username:['',[ Validators.required,this.validatorsService.cantStrider ]],
      password:['',[ Validators.required,Validators.minLength(6)]],
      password2:['',[ Validators.required ]]
    },{
      validators:[
        this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
      ]
    });

    constructor(
      private fb:FormBuilder,
      private validatorsService: ValidatorsService,
      private emailValidator:EmailValidators
    ) {}

    isValidField(field:string){
      return this.validatorsService.isValidField(this.myForms,field)
    }

    Onsubmit(){
      this.myForms.markAllAsTouched();
    }


}

