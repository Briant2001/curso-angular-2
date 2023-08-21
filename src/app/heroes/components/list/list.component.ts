import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list' ,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 
    public heroes :string[]=["Spider","Holk","Thor"];
    public itemDelete :string="";


    deleteLastItem():string{
      this.itemDelete = this.heroes.pop()!.toString()
      return this.itemDelete;
    }
}
