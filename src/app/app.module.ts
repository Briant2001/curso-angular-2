import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingMouduleRoutingModule } from './app.routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//  Configuracion del locale de la app
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-CA";
import {registerLocaleData} from "@angular/common"

registerLocaleData(localeEsHN)
registerLocaleData(localeFrCA)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMouduleRoutingModule,
    SharedModule,
    // ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
