import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrePageComponent } from './pages/registre-page/registre-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    LoginPageComponent,
    RegistrePageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
