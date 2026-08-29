import { CommonModule, Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { MenuService } from '../../core/menu.service';
import { MotywService } from '../../core/motyw.service';
import { PrzepisyService } from '../../core/przepisy.service';

/**
 * Jedna strona przepisu dla wszystkich 332 dań.
 *
 * Układ przejęty z ręcznie napisanego ekranu Classic Boba Tea — dwie zakładki
 * (składniki i przygotowanie) oraz przycisk generujący listę zakupów. Różnica
 * polega na tym, że treść przychodzi z danych, a nie z pól klasy.
 */
@Component({
  selector: 'app-przepis',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './przepis.component.html',
  styleUrl: './przepis.component.css',
})
export class PrzepisComponent {
  private readonly trasa = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly lokalizacja = inject(Location);
  private readonly przepisy = inject(PrzepisyService);
  private readonly menu = inject(MenuService);
  private readonly motyw = inject(MotywService);

  readonly czyJasny = this.motyw.czyJasny;

  private readonly parametry = toSignal(
    this.trasa.paramMap.pipe(
      map((p) => ({ parent: p.get('parent') ?? '', slug: p.get('slug') ?? '' }))
    ),
    { initialValue: { parent: '', slug: '' } }
  );

  readonly przepis = computed(() => {
    const { parent, slug } = this.parametry();
    return this.przepisy.przepis(parent, slug);
  });

  /** Danie nadrzędne — do okruszka nawigacyjnego i powrotu. */
  readonly danieNadrzedne = computed(() => this.menu.wezel(this.parametry().parent));

  readonly rodzenstwo = computed(() => {
    const { parent, slug } = this.parametry();
    return this.przepisy.rodzenstwo(parent, slug);
  });

  /** Obrazek bierzemy z menu — dane przepisu nie powtarzają ścieżek. */
  readonly obraz = computed(() => {
    const { parent, slug } = this.parametry();
    return this.menu.wezel(parent)?.dzieci.find((d) => d.slug === slug)?.obraz ?? '';
  });

  readonly zakladka = signal<'skladniki' | 'przygotowanie'>('skladniki');

  przelaczMotyw(): void {
    this.motyw.przelacz();
  }

  wstecz(): void {
    this.lokalizacja.back();
  }

  /** Przekazuje składniki na ekran listy zakupów — tą samą drogą co pierwotny przepis. */
  generujListeZakupow(): void {
    const przepis = this.przepis();
    if (!przepis) return;

    void this.router.navigate(['/lista-zakupow'], {
      state: {
        nazwa: przepis.nazwa,
        skladniki: przepis.skladniki,
        powrot: this.router.url,
      },
    });
  }
}
