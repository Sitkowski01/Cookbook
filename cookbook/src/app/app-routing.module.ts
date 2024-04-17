import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { SniadanieComponent } from './sniadanie/sniadanie.component';
import { ObiadComponent } from './obiad/obiad.component';
import { KolacjaComponent } from './kolacja/kolacja.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, 
  { path: 'menu', component: MenuPageComponent } ,
  { path: 'sniadanie', component: SniadanieComponent },
  { path: 'obiad', component: ObiadComponent },
  { path: 'kolacja', component: KolacjaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
