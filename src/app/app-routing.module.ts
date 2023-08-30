import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

const routes: Routes=[
//   {
//   path:"home",
//   component:HomePagesComponent,
//   children:[

//   ]
// },
  {
    path:"about",
    component:AboutPagesComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"countries",
    loadChildren:()=> import("./countries/countries.module").then(m => m.CountriesModule)
  },
  {
    path:"**",
    redirectTo:"countries"
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
