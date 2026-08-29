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
  nazwa?: string;
  skladniki?: string[];
  powrot?: string;
  /** Pola ze starego ekranu boba tea — obsługiwane dla zgodności wstecz. */
  doughIngredients?: string[];
  fillingIngredients?: string[];
  servingIngredients?: string[];
}

/**
 * Lista zakupów.
 *
 * Powstała jako ekran dla jednego przepisu (Classic Boba Tea) z trzema
 * sztywnymi grupami składników. Teraz przyjmuje dowolną listę, więc obsługuje
 * wszystkie przepisy w aplikacji — stary kształt stanu nadal działa.
 */
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
  nazwaPrzepisu = '';
  private powrot = '/menu';

  get isBrightMode(): boolean {
    return this.motyw.czyJasny();
  }

  ngOnInit(): void {
    // Stan bierzemy z Location, a nie z globalnego `history` — to samo zrodlo,
    // ale dostepne takze przy renderowaniu po stronie serwera.
    const stan = (this.location.getState() ?? {}) as StanPrzepisu;

    const skladniki = stan.skladniki ?? [
      ...(stan.doughIngredients ?? []),
      ...(stan.fillingIngredients ?? []),
      ...(stan.servingIngredients ?? []),
    ];

    this.ingredients = skladniki.map((name) => ({ name, checked: false }));
    this.nazwaPrzepisu = stan.nazwa ?? '';
    if (stan.powrot) this.powrot = stan.powrot;
  }

  /** Ile pozycji jest juz odhaczonych — do licznika postepu. */
  get kupione(): number {
    return this.ingredients.filter((s) => s.checked).length;
  }

  /** Lista jest pusta, gdy wejsc tu bezposrednio, z pominieciem przepisu. */
  get brakSkladnikow(): boolean {
    return this.ingredients.length === 0;
  }

  toggleTheme(): void {
    this.motyw.przelacz();
  }

  goBack(): void {
    void this.router.navigateByUrl(this.powrot);
  }

  updateCheckedStatus(index: number): void {
    this.ingredients[index].checked = !this.ingredients[index].checked;
  }

  odznaczWszystko(): void {
    this.ingredients = this.ingredients.map((s) => ({ ...s, checked: false }));
  }
}
