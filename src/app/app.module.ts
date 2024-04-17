import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MealComponent } from './menu-page/meal/meal.component';
import { SniadanieComponent } from './sniadanie/sniadanie.component';
import { ObiadComponent } from './obiad/obiad.component';
import { KolacjaComponent } from './kolacja/kolacja.component';
import { MealSniadanieComponent } from './sniadanie/meal-sniadanie/meal-sniadanie.component';
import { FormsModule } from '@angular/forms';
import { MealObiadComponent } from './obiad/meal-obiad/meal-obiad.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuPageComponent,
    MealComponent,
    SniadanieComponent,
    ObiadComponent,
    KolacjaComponent,
    MealSniadanieComponent,
    MealObiadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
