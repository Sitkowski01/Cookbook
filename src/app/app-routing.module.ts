import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { SniadanieComponent } from './sniadanie/sniadanie.component';
import { ObiadComponent } from './obiad/obiad.component';
import { KolacjaComponent } from './kolacja/kolacja.component';
import { ShakshoukaDetailsComponent } from './sniadanie/meal-details/shakshouka-details/shakshouka-details.component';
import { CrepesDetailsComponent } from './sniadanie/meal-details/crepes-details/crepes-details.component';
import { EggsDetailsComponent } from './sniadanie/meal-details/eggs-details/eggs-details.component';
import { OmeletteDetailsComponent } from './sniadanie/meal-details/omelette-details/omelette-details.component';
import { PancakesDetailsComponent } from './sniadanie/meal-details/pancakes-details/pancakes-details.component';
import { PaniniDetailsComponent } from './sniadanie/meal-details/panini-details/panini-details.component';
import { BobaTeaDetailsComponent } from './sniadanie/meal-details/boba-tea-details/boba-tea-details.component';
import { BreadWithOilDetailsComponent } from './sniadanie/meal-details/bread-with-oil-details/bread-with-oil-details.component';
import { BruschettaDetailsComponent } from './sniadanie/meal-details/bruschetta-details/bruschetta-details.component';
import { CroissantDetailsComponent } from './sniadanie/meal-details/croissant-details/croissant-details.component';
import { DimSumDetailsComponent } from './sniadanie/meal-details/dim-sum-details/dim-sum-details.component';
import { MisoDetailsComponent } from './sniadanie/meal-details/miso-details/miso-details.component';
import { MuesliDetailsComponent } from './sniadanie/meal-details/muesli-details/muesli-details.component';
import { OatmealDetailsComponent } from './sniadanie/meal-details/oatmeal-details/oatmeal-details.component';
import { OkonomiyakiDetailsComponent } from './sniadanie/meal-details/okonomiyaki-details/okonomiyaki-details.component';
import { QuicheDetailsComponent } from './sniadanie/meal-details/quiche-details/quiche-details.component';
import { RiseWithEggDetailsComponent } from './sniadanie/meal-details/rise-with-egg-details/rise-with-egg-details.component';
import { SandwichesDetailsComponent } from './sniadanie/meal-details/sandwiches-details/sandwiches-details.component';
import { ScrambledEggsDetailsComponent } from './sniadanie/meal-details/scrambled-eggs-details/scrambled-eggs-details.component';
import { ShrimpsDetailsComponent } from './sniadanie/meal-details/shrimps-details/shrimps-details.component';
import { ToastsDetailsComponent } from './sniadanie/meal-details/toasts-details/toasts-details.component';
import { WontonDetailsComponent } from './sniadanie/meal-details/wonton-details/wonton-details.component';
import { YoghurtDetailsComponent } from './sniadanie/meal-details/yoghurt-details/yoghurt-details.component';
import { BeetrootSoupDetailsComponent } from './obiad/meal-details/beetroot-soup-details/beetroot-soup-details.component';
import { CheeseburgerDetailsComponent } from './obiad/meal-details/cheeseburger-details/cheeseburger-details.component';
import { DumplingsDetailsComponent } from './obiad/meal-details/dumplings-details/dumplings-details.component';
import { MushroomSoupDetailsComponent } from './obiad/meal-details/mushroom-soup-details/mushroom-soup-details.component';
import { PorkCutletDetailsComponent } from './obiad/meal-details/pork-cutlet-details/pork-cutlet-details.component';
import { PorkRibbsDetailsComponent } from './obiad/meal-details/pork-ribbs-details/pork-ribbs-details.component';
import { SilesianNoodlesDetailsComponent } from './obiad/meal-details/silesian-noodles-details/silesian-noodles-details.component';
import { SourRyeSoupDetailsComponent } from './obiad/meal-details/sour-rye-soup-details/sour-rye-soup-details.component';
import { CoqAuVinDetailsComponent } from './obiad/meal-details/coq-au-vin-details/coq-au-vin-details.component';
import { DonburiDetailsComponent } from './obiad/meal-details/donburi-details/donburi-details.component';
import { FocacciaDetailsComponent } from './obiad/meal-details/focaccia-details/focaccia-details.component';
import { GreekSaladDetailsComponent } from './obiad/meal-details/greek-salad-details/greek-salad-details.component';
import { KungPaoDetailsComponent } from './obiad/meal-details/kung-pao-details/kung-pao-details.component';
import { LasagneDetailsComponent } from './obiad/meal-details/lasagne-details/lasagne-details.component';
import { PaellaDetailsComponent } from './obiad/meal-details/paella-details/paella-details.component';
import { PizzaDetailsComponent } from './obiad/meal-details/pizza-details/pizza-details.component';
import { RamenDetailsComponent } from './obiad/meal-details/ramen-details/ramen-details.component';
import { RatatouilleDetailsComponent } from './obiad/meal-details/ratatouille-details/ratatouille-details.component';
import { RisottoDetailsComponent } from './obiad/meal-details/risotto-details/risotto-details.component';
import { SpaghettiDetailsComponent } from './obiad/meal-details/spaghetti-details/spaghetti-details.component';
import { SushiDetailsComponent } from './obiad/meal-details/sushi-details/sushi-details.component';
import { TroutDetailsComponent } from './obiad/meal-details/trout-details/trout-details.component';
import { CabbageRollsDetailsComponent } from './obiad/meal-details/cabbage-rolls-details/cabbage-rolls-details.component';
import { HuntersStewDetailsComponent } from './obiad/meal-details/hunters-stew-details/hunters-stew-details.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, 
  { path: 'menu', component: MenuPageComponent } ,
  { path: 'sniadanie', component: SniadanieComponent },
  { path: 'obiad', component: ObiadComponent },
  { path: 'kolacja', component: KolacjaComponent },
  { path: 'shakshouka-details', component: ShakshoukaDetailsComponent },
  { path: 'omelette-details', component: OmeletteDetailsComponent },
  { path: 'eggs-details', component: EggsDetailsComponent },
  { path: 'crepes-details', component: CrepesDetailsComponent },
  { path: 'pancakes-details', component: PancakesDetailsComponent },
  { path: 'panini-details', component: PaniniDetailsComponent },
  { path: 'sandwiches-details', component: SandwichesDetailsComponent },
  { path: 'scrambled-eggs-details', component: ScrambledEggsDetailsComponent },
  { path: 'rise-with-egg-details', component: RiseWithEggDetailsComponent },
  { path: 'toasts-details', component: ToastsDetailsComponent },
  { path: 'miso-details', component: MisoDetailsComponent },
  { path: 'okonomiyaki-details', component: OkonomiyakiDetailsComponent },
  { path: 'croissant-details', component: CroissantDetailsComponent },
  { path: 'bread-with-oil-details', component: BreadWithOilDetailsComponent },
  { path: 'yoghurt-details', component: YoghurtDetailsComponent },
  { path: 'dim-sum-details', component: DimSumDetailsComponent },
  { path: 'wonton-details', component: WontonDetailsComponent },
  { path: 'boba-tea-details', component: BobaTeaDetailsComponent },
  { path: 'shrimps-details', component: ShrimpsDetailsComponent },
  { path: 'bruschetta-details', component: BruschettaDetailsComponent },
  { path: 'dim-sum-details', component: DimSumDetailsComponent },
  { path: 'quiche-details', component: QuicheDetailsComponent },
  { path: 'muesli-details', component: MuesliDetailsComponent },
  { path: 'oatmeal-details', component: OatmealDetailsComponent },
  { path: 'beetroot-soup-details', component: BeetrootSoupDetailsComponent }, 
  { path: 'mushroom-soup-details', component: MushroomSoupDetailsComponent } ,
  { path: 'dumplings-details', component: DumplingsDetailsComponent },
  { path: 'silesian-noodles-details', component: SilesianNoodlesDetailsComponent },
  { path: 'pork-cutlet-details', component: PorkCutletDetailsComponent },
  { path: 'sour-rye-soup-details', component: SourRyeSoupDetailsComponent },
  { path: 'cheeseburger-details', component: CheeseburgerDetailsComponent },
  { path: 'pork-ribbs-details', component: PorkRibbsDetailsComponent },
  { path: 'ramen-details', component: RamenDetailsComponent },
  { path: 'donburi-details', component: DonburiDetailsComponent },
  { path: 'pizza-details', component: PizzaDetailsComponent },
  { path: 'risotto-details', component: RisottoDetailsComponent },
  { path: 'spaghetti-details', component: SpaghettiDetailsComponent },
  { path: 'greek-salad-details', component: GreekSaladDetailsComponent },
  { path: 'trout-details', component: TroutDetailsComponent },
  { path: 'focaccia-details', component: FocacciaDetailsComponent },
  { path: 'kung-pao-details', component: KungPaoDetailsComponent },
  { path: 'pad-thai-details', component: SushiDetailsComponent },
  { path: 'sushi-details', component: SushiDetailsComponent },
  { path: 'ratatouille-details', component: RatatouilleDetailsComponent },
  { path: 'lasagne-details', component: LasagneDetailsComponent },
  { path: 'paella-details', component: PaellaDetailsComponent },
  { path: 'coq-au-vin-details', component: CoqAuVinDetailsComponent },
  { path: 'hunters-stew-details', component: HuntersStewDetailsComponent },
  { path: 'cabbage-rolls-details', component: CabbageRollsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
