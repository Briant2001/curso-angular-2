import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm:FormGroup = this.fb.group({
    gender:['',Validators.required],
    wantNotifications:[true,Validators.required],
    termsAndConditions:[false,Validators.requiredTrue]
  });

   public person = {
    gender : "M",
    wantNotifications:false,
   }

  constructor(private fb:FormBuilder, private validatorsService:ValidatorsService) {}
  ngOnInit(): void {

    this.myForm.reset(this.person)

  }


  isValidField(field:string):boolean | null{
    return this.validatorsService.isValidField(this.myForm,field);
  }


  onSave(){
    if (this.myForm.invalid) {
      console.log('Formulario no valido');
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value);
    const {termsAndConditions,...newPerson} = this.myForm.value;

    this.person = newPerson;

  }

}
