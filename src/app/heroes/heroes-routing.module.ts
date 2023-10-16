import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearhPagesComponent } from './pages/searh-pages/searh-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { HeorePagesComponent } from './pages/heore-pages/heore-pages.component';

const routes: Routes = [
  {
    path:"",
    component:LayoutPagesComponent,
    children:[
      {
        path:"new-hero",component:NewPagesComponent
      },
      {
        path:"search",component:SearhPagesComponent
      },
      {
        path:"edit/:id",component:NewPagesComponent
      },
      {
        path:"list",component:ListPagesComponent
      },
      {
        path:":id",component:HeorePagesComponent
      },
      {
        path:"**",redirectTo:"list"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
