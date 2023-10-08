import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  public items:MenuItem[]=[]
  ngOnInit(): void {
    this.items=[
      {
        label:"Pipes de angular",icon:"pi pi-desktop", 
        items:[
          {
            label:"Textos sin fechas", icon:"pi pi-align-left",routerLink:'/',routerLinkActiveOptions:"active"
          },
          {
            label:"Numeros", icon:"pi pi-dollar",routerLink:"numbers",routerLinkActiveOptions:"active"
          },
          {
            label:"No comunes", icon:"pi pi-globe",routerLink:"uncommon",routerLinkActiveOptions:"active"
          }
      ]
    },
      {label:"Pipes personalizados",icon:"pi pi-cog",
      items:[
        {
          label:"Custom Pipe",
          icon:"pi pi-icon",
          routerLink:"custom"
        }
      ]
    
      },
      
    ]
  }

}
