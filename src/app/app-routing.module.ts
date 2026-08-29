import { inject, NgModule } from '@angular/core';
import { CanMatchFn, Route, RouterModule, Routes, UrlSegment } from '@angular/router';

import { MenuService } from './core/menu.service';
import { PrzepisyService } from './core/przepisy.service';
import { KategoriaComponent } from './strony/kategoria/kategoria.component';
import { PrzepisComponent } from './strony/przepis/przepis.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ClassicBobaTeaShoppingListComponent } from './classic-boba-tea-shopping-list/classic-boba-tea-shopping-list.component';

/**
 * Wpuszcza na trasę `:slug` tylko wtedy, gdy taka strona listy istnieje.
 * Dzięki temu jedna trasa obsługuje 73 adresy, a nieznane lecą na `**`
 * zamiast wyświetlać pusty szkielet.
 */
export const istniejeWMenu: CanMatchFn = (_trasa: Route, segmenty: UrlSegment[]) => {
  const slug = segmenty[0]?.path ?? '';
  return !!inject(MenuService).wezel(slug);
};

/**
 * Wpuszcza na `/przepis/:parent/:slug` tylko istniejące przepisy.
 * Para (danie, wariant) jest kluczem, bo warianty typu `classic-details`
 * powtarzają się między różnymi daniami.
 */
export const istniejePrzepis: CanMatchFn = (_trasa: Route, segmenty: UrlSegment[]) => {
  const [, parent, slug] = segmenty.map((s) => s.path);
  return !!parent && !!slug && inject(PrzepisyService).czyIstnieje(parent, slug);
};

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'menu', component: MenuPageComponent },
  {
    path: 'przepis/:parent/:slug',
    component: PrzepisComponent,
    canMatch: [istniejePrzepis],
  },
  { path: 'lista-zakupow', component: ClassicBobaTeaShoppingListComponent },

  // Adres, który istniał przed refaktorem — nie może przestać działać.
  {
    path: 'classic-boba-tea-details',
    redirectTo: 'przepis/boba-tea-details/classic-boba-tea-details',
  },
  { path: 'classic-boba-tea-shopping-list', redirectTo: 'lista-zakupow' },

  { path: ':slug', component: KategoriaComponent, canMatch: [istniejeWMenu] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
