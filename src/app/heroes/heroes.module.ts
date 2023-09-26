import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeorePagesComponent } from './pages/heore-pages/heore-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearhPagesComponent } from './pages/searh-pages/searh-pages.component';


@NgModule({
  declarations: [
    HeorePagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewPagesComponent,
    SearhPagesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
