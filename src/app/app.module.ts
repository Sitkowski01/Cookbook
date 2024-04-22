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
import { BeetrootSoupDetailsComponent } from './obiad/meal-details/beetroot-soup-details/beetroot-soup-details.component';
import { HuntersStewDetailsComponent } from './obiad/meal-details/hunters-stew-details/hunters-stew-details.component';
import { CabbageRollsDetailsComponent } from './obiad/meal-details/cabbage-rolls-details/cabbage-rolls-details.component';
import { MushroomSoupDetailsComponent } from './obiad/meal-details/mushroom-soup-details/mushroom-soup-details.component';
import { DumplingsDetailsComponent } from './obiad/meal-details/dumplings-details/dumplings-details.component';
import { SilesianNoodlesDetailsComponent } from './obiad/meal-details/silesian-noodles-details/silesian-noodles-details.component';
import { PorkCutletDetailsComponent } from './obiad/meal-details/pork-cutlet-details/pork-cutlet-details.component';
import { SourRyeSoupDetailsComponent } from './obiad/meal-details/sour-rye-soup-details/sour-rye-soup-details.component';
import { CheeseburgerDetailsComponent } from './obiad/meal-details/cheeseburger-details/cheeseburger-details.component';
import { PorkRibbsDetailsComponent } from './obiad/meal-details/pork-ribbs-details/pork-ribbs-details.component';
import { RamenDetailsComponent } from './obiad/meal-details/ramen-details/ramen-details.component';
import { DonburiDetailsComponent } from './obiad/meal-details/donburi-details/donburi-details.component';
import { PizzaDetailsComponent } from './obiad/meal-details/pizza-details/pizza-details.component';
import { RisottoDetailsComponent } from './obiad/meal-details/risotto-details/risotto-details.component';
import { SpaghettiDetailsComponent } from './obiad/meal-details/spaghetti-details/spaghetti-details.component';
import { GreekSaladDetailsComponent } from './obiad/meal-details/greek-salad-details/greek-salad-details.component';
import { TroutDetailsComponent } from './obiad/meal-details/trout-details/trout-details.component';
import { FocacciaDetailsComponent } from './obiad/meal-details/focaccia-details/focaccia-details.component';
import { KungPaoDetailsComponent } from './obiad/meal-details/kung-pao-details/kung-pao-details.component';
import { PadThaiDetailsComponent } from './obiad/meal-details/pad-thai-details/pad-thai-details.component';
import { SushiDetailsComponent } from './obiad/meal-details/sushi-details/sushi-details.component';
import { RatatouilleDetailsComponent } from './obiad/meal-details/ratatouille-details/ratatouille-details.component';
import { LasagneDetailsComponent } from './obiad/meal-details/lasagne-details/lasagne-details.component';
import { PaellaDetailsComponent } from './obiad/meal-details/paella-details/paella-details.component';
import { CoqAuVinDetailsComponent } from './obiad/meal-details/coq-au-vin-details/coq-au-vin-details.component';

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
    BeetrootSoupDetailsComponent,
    HuntersStewDetailsComponent,
    CabbageRollsDetailsComponent,
    MushroomSoupDetailsComponent,
    DumplingsDetailsComponent,
    SilesianNoodlesDetailsComponent,
    PorkCutletDetailsComponent,
    SourRyeSoupDetailsComponent,
    CheeseburgerDetailsComponent,
    PorkRibbsDetailsComponent,
    RamenDetailsComponent,
    DonburiDetailsComponent,
    PizzaDetailsComponent,
    RisottoDetailsComponent,
    SpaghettiDetailsComponent,
    GreekSaladDetailsComponent,
    TroutDetailsComponent,
    FocacciaDetailsComponent,
    KungPaoDetailsComponent,
    PadThaiDetailsComponent,
    SushiDetailsComponent,
    RatatouilleDetailsComponent,
    LasagneDetailsComponent,
    PaellaDetailsComponent,
    CoqAuVinDetailsComponent,
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
