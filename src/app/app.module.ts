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
import { ShakshoukaDetailsComponent } from './sniadanie/meal-details/shakshouka-details/shakshouka-details.component';
import { OmeletteDetailsComponent } from './sniadanie/meal-details/omelette-details/omelette-details.component';
import { EggsDetailsComponent } from './sniadanie/meal-details/eggs-details/eggs-details.component';
import { CrepesDetailsComponent } from './sniadanie/meal-details/crepes-details/crepes-details.component';
import { PancakesDetailsComponent } from './sniadanie/meal-details/pancakes-details/pancakes-details.component';
import { PaniniDetailsComponent } from './sniadanie/meal-details/panini-details/panini-details.component';
import { SandwichesDetailsComponent } from './sniadanie/meal-details/sandwiches-details/sandwiches-details.component';
import { ScrambledEggsDetailsComponent } from './sniadanie/meal-details/scrambled-eggs-details/scrambled-eggs-details.component';
import { RiseWithEggDetailsComponent } from './sniadanie/meal-details/rise-with-egg-details/rise-with-egg-details.component';
import { ToastsDetailsComponent } from './sniadanie/meal-details/toasts-details/toasts-details.component';
import { MisoDetailsComponent } from './sniadanie/meal-details/miso-details/miso-details.component';
import { OkonomiyakiDetailsComponent } from './sniadanie/meal-details/okonomiyaki-details/okonomiyaki-details.component';
import { CroissantDetailsComponent } from './sniadanie/meal-details/croissant-details/croissant-details.component';
import { BreadWithOilDetailsComponent } from './sniadanie/meal-details/bread-with-oil-details/bread-with-oil-details.component';
import { YoghurtDetailsComponent } from './sniadanie/meal-details/yoghurt-details/yoghurt-details.component';
import { DimSumDetailsComponent } from './sniadanie/meal-details/dim-sum-details/dim-sum-details.component';
import { WontonDetailsComponent } from './sniadanie/meal-details/wonton-details/wonton-details.component';
import { BobaTeaDetailsComponent } from './sniadanie/meal-details/boba-tea-details/boba-tea-details.component';
import { ShrimpsDetailsComponent } from './sniadanie/meal-details/shrimps-details/shrimps-details.component';
import { BruschettaDetailsComponent } from './sniadanie/meal-details/bruschetta-details/bruschetta-details.component';
import { QuicheDetailsComponent } from './sniadanie/meal-details/quiche-details/quiche-details.component';
import { MuesliDetailsComponent } from './sniadanie/meal-details/muesli-details/muesli-details.component';
import { OatmealDetailsComponent } from './sniadanie/meal-details/oatmeal-details/oatmeal-details.component';

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
    ShakshoukaDetailsComponent,
    OmeletteDetailsComponent,
    EggsDetailsComponent,
    CrepesDetailsComponent,
    PancakesDetailsComponent,
    PaniniDetailsComponent,
    SandwichesDetailsComponent,
    ScrambledEggsDetailsComponent,
    RiseWithEggDetailsComponent,
    ToastsDetailsComponent,
    MisoDetailsComponent,
    OkonomiyakiDetailsComponent,
    CroissantDetailsComponent,
    BreadWithOilDetailsComponent,
    YoghurtDetailsComponent,
    DimSumDetailsComponent,
    WontonDetailsComponent,
    BobaTeaDetailsComponent,
    ShrimpsDetailsComponent,
    BruschettaDetailsComponent,
    QuicheDetailsComponent,
    MuesliDetailsComponent,
    OatmealDetailsComponent,
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
