import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MealComponent } from './menu-page/meal/meal.component';
import { ClassicBobaTeaDetailsComponent } from './sniadanie/meal-details/boba-tea-details/classic-boba-tea-details/classic-boba-tea-details.component';
import { ClassicBobaTeaShoppingListComponent } from './classic-boba-tea-shopping-list/classic-boba-tea-shopping-list.component';

/**
 * Szesc deklaracji zamiast osiemdziesieciu dwoch.
 *
 * Listy dan obsluguje jeden komponent samodzielny (`KategoriaComponent`),
 * wiec nie ma go tutaj — trafia prosto do trasy.
 */
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuPageComponent,
    MealComponent,
    ClassicBobaTeaDetailsComponent,
    ClassicBobaTeaShoppingListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
