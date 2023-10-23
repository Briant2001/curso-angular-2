import { Component } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  // public myForm:FormGroup =  new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public myForm:FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.maxLength(3)]],
    price:[0, [Validators.required, Validators.min(0)]],
    inStorage:[0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb:FormBuilder){}

  onSave(){
    console.log(this.myForm.value)
  }


}
