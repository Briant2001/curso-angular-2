import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrePageComponent } from './pages/registre-page/registre-page.component';

const routes:Routes =[
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"login",
        component:LoginPageComponent
      },
      {
        path:"new-acount",
        component:RegistrePageComponent
      },
      {
        path:"**",
        redirectTo:"login",
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AuthRoutingModule { }
