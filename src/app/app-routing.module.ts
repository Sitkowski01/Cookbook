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
  { path: 'ramen-details', component: CrepesDetailsComponent },
  { path: 'donburi-details', component: PancakesDetailsComponent },
  { path: 'pizza-details', component: PaniniDetailsComponent },
  { path: 'risotto-details', component: SandwichesDetailsComponent },
  { path: 'spaghetti-details', component: ScrambledEggsDetailsComponent },
  { path: 'greek-salad-details', component: RiseWithEggDetailsComponent },
  { path: 'trout-details', component: ToastsDetailsComponent },
  { path: 'focaccia-details', component: MisoDetailsComponent },
  { path: 'kung-pao-details', component: OkonomiyakiDetailsComponent },
  { path: 'pad-thai-details', component: CroissantDetailsComponent },
  { path: 'sushi-details', component: BreadWithOilDetailsComponent },
  { path: 'ratatouille-details', component: YoghurtDetailsComponent },
  { path: 'lasagne-details', component: DimSumDetailsComponent },
  { path: 'paella-details', component: WontonDetailsComponent },
  { path: 'coq-au-vin-details', component: BobaTeaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
