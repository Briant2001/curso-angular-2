import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactComponent
  ]
})
export class SharedModule { }
