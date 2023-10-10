import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeorePagesComponent } from './pages/heore-pages/heore-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearhPagesComponent } from './pages/searh-pages/searh-pages.component';
import { MaterialModule } from '../material/material.module';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HeorePagesComponent,
    LayoutPagesComponent,
    NewPagesComponent,
    SearhPagesComponent,
    ListPagesComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
  providers:[]
})
export class HeroesModule { }
