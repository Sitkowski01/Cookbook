import { inject, NgModule } from '@angular/core';
import { CanMatchFn, Route, RouterModule, Routes, UrlSegment } from '@angular/router';

import { MenuService } from './core/menu.service';
import { KategoriaComponent } from './strony/kategoria/kategoria.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ClassicBobaTeaDetailsComponent } from './sniadanie/meal-details/boba-tea-details/classic-boba-tea-details/classic-boba-tea-details.component';
import { ClassicBobaTeaShoppingListComponent } from './classic-boba-tea-shopping-list/classic-boba-tea-shopping-list.component';

/**
 * Wpuszcza na trase `:slug` tylko wtedy, gdy taka strona istnieje w danych.
 * Dzieki temu jedna trasa obsluguje 73 adresy, a nieznane leca na `**`
 * zamiast wyswietlac pusty szkielet.
 */
export const istniejeWMenu: CanMatchFn = (_trasa: Route, segmenty: UrlSegment[]) => {
  const slug = segmenty[0]?.path ?? '';
  return !!inject(MenuService).wezel(slug);
};

/**
 * Szesc tras zamiast siedemdziesieciu osmiu.
 *
 * Wszystkie dotychczasowe adresy dzialaja bez zmian — `/sniadanie`,
 * `/curry-details` i reszta trafiaja w parametryzowana trase `:slug`.
 */
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'menu', component: MenuPageComponent },
  {
    path: 'classic-boba-tea-details',
    component: ClassicBobaTeaDetailsComponent,
  },
  {
    path: 'classic-boba-tea-shopping-list',
    component: ClassicBobaTeaShoppingListComponent,
  },
  { path: ':slug', component: KategoriaComponent, canMatch: [istniejeWMenu] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
