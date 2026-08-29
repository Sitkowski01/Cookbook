import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MotywService } from '../core/motyw.service';

interface SkladnikDoKupienia {
  name: string;
  checked: boolean;
}

/** Stan przekazywany z ekranu przepisu przy nawigacji. */
interface StanPrzepisu {
  doughIngredients?: string[];
  fillingIngredients?: string[];
  servingIngredients?: string[];
}

@Component({
  selector: 'app-classic-boba-tea-shopping-list',
  templateUrl: './classic-boba-tea-shopping-list.component.html',
  styleUrls: ['./classic-boba-tea-shopping-list.component.css'],
})
export class ClassicBobaTeaShoppingListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly motyw = inject(MotywService);

  ingredients: SkladnikDoKupienia[] = [];
  items: string[] = ['Classic-boba-tea', 'Gołąbki', 'Żurek', 'Barszcz czerwony'];
  selectedIndex = 0;

  get isBrightMode(): boolean {
    return this.motyw.czyJasny();
  }

  ngOnInit(): void {
    // Stan bierzemy z Location, a nie z globalnego `history` — to samo zrodlo,
    // ale dostepne takze przy renderowaniu po stronie serwera, gdzie `history`
    // nie istnieje i wywracalo prerender.
    const stan = (this.location.getState() ?? {}) as StanPrzepisu;

    this.ingredients = [
      ...(stan.doughIngredients ?? []),
      ...(stan.fillingIngredients ?? []),
      ...(stan.servingIngredients ?? []),
    ].map((name) => ({ name, checked: false }));
  }

  /** Lista jest pusta, gdy wejsc tu bezposrednio, z pominieciem przepisu. */
  get brakSkladnikow(): boolean {
    return this.ingredients.length === 0;
  }

  toggleTheme(): void {
    this.motyw.przelacz();
  }

  goBack(): void {
    this.router.navigate(['/boba-tea-details']);
  }

  getBackgroundImageUrl(): string {
    return 'assets/images/meals-sniadania/boba-tea/boba-tea-recipe/boba-tea-classic.png';
  }

  updateCheckedStatus(index: number): void {
    this.ingredients[index].checked = !this.ingredients[index].checked;
  }

  isActive(index: number): boolean {
    return index === this.selectedIndex;
  }

  selectItem(index: number): void {
    this.selectedIndex = index;
  }
}
