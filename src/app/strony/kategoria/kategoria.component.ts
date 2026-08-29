import { CommonModule, Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { MenuService } from '../../core/menu.service';
import { MotywService } from '../../core/motyw.service';
import { KafelekDaniaComponent } from '../../shared/kafelek-dania/kafelek-dania.component';

/**
 * Jedna strona listy dla calego serwisu.
 *
 * Zastepuje 73 komponenty, ktore roznily sie wylacznie tytulem, tablica dan
 * i katalogiem obrazkow — cala reszta (wyszukiwanie, motyw, karuzela kuchni)
 * byla w kazdym z nich przeklejona.
 */
@Component({
  selector: 'app-kategoria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, KafelekDaniaComponent],
  templateUrl: './kategoria.component.html',
  styleUrl: './kategoria.component.css',
})
export class KategoriaComponent {
  private readonly menu = inject(MenuService);
  private readonly trasa = inject(ActivatedRoute);
  private readonly lokalizacja = inject(Location);
  private readonly motyw = inject(MotywService);

  readonly czyJasny = this.motyw.czyJasny;

  /** Slug biezacej strony, prosto z adresu. */
  private readonly slug = toSignal(
    this.trasa.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly wezel = computed(() => this.menu.wezel(this.slug()));
  readonly kuchnie = computed(() => this.menu.kuchnie(this.slug()));

  readonly fraza = signal('');
  readonly wybranaKuchnia = signal<string | null>(null);
  readonly szukanieOtwarte = signal(false);

  /** Lista kafelkow po zastosowaniu obu filtrow. */
  readonly widoczne = computed(() =>
    this.menu.filtruj(this.slug(), this.fraza(), this.wybranaKuchnia())
  );

  /** Ile widocznych pozycji nie ma jeszcze wlasnej podstrony. */
  readonly brakujace = computed(
    () => this.widoczne().filter((d) => !d.dostepne).length
  );

  przelaczSzukanie(): void {
    this.szukanieOtwarte.update((v) => !v);
    if (!this.szukanieOtwarte()) this.fraza.set('');
  }

  przelaczMotyw(): void {
    this.motyw.przelacz();
  }

  wybierzKuchnie(kuchnia: string | null): void {
    this.wybranaKuchnia.set(kuchnia);
  }

  wstecz(): void {
    this.lokalizacja.back();
  }
}
