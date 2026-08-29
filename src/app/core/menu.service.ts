import { Injectable } from '@angular/core';
import { MENU } from './menu.data';
import { PozycjaMenu, WezelMenu } from './menu.model';

/**
 * Strony przepisów, które mają własny komponent i własną trasę, ale nie są
 * węzłami drzewa menu — nie prowadzą do listy dań, tylko do samego przepisu.
 *
 * Bez tej listy jedyny gotowy przepis w aplikacji był oznaczany jako „wkrótce"
 * i nie dało się w niego kliknąć, bo flaga `dostepne` w wygenerowanych danych
 * patrzyła wyłącznie na to, czy slug jest węzłem menu.
 */
export const STRONY_PRZEPISOW = new Set<string>(['classic-boba-tea-details']);

/**
 * Jedno zrodlo prawdy o menu.
 *
 * Wczesniej te same tablice lezaly zakodowane na sztywno w 73 komponentach,
 * a wyszukiwanie i filtrowanie bylo w kazdym z nich przeklejone osobno.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly wezly = new Map<string, WezelMenu>(
    MENU.map((w) => [w.slug, this.zDostepnoscia(w)])
  );

  /**
   * Przelicza flagę `dostepne` raz, przy starcie: pozycja jest klikalna,
   * gdy prowadzi do listy (węzeł menu) ALBO do gotowej strony przepisu.
   */
  private zDostepnoscia(wezel: WezelMenu): WezelMenu {
    const slugiWezlow = new Set(MENU.map((w) => w.slug));
    return {
      ...wezel,
      dzieci: wezel.dzieci.map((d) => ({
        ...d,
        dostepne: slugiWezlow.has(d.slug) || STRONY_PRZEPISOW.has(d.slug),
      })),
    };
  }


  /** Wezel po slugu albo undefined, gdy takiej strony nie ma. */
  wezel(slug: string): WezelMenu | undefined {
    return this.wezly.get(slug);
  }

  /** Trzy kategorie glowne: sniadanie, obiad, kolacja. */
  kategorie(): WezelMenu[] {
    return MENU.filter((w) => w.kategoria);
  }

  /** Lista kuchni do filtra — wyliczana z danych, nie wpisywana recznie. */
  kuchnie(slug: string): string[] {
    const wezel = this.wezel(slug);
    if (!wezel) return [];
    const zbior = new Set<string>();
    for (const d of wezel.dzieci) {
      if (d.kuchnia) zbior.add(d.kuchnia);
    }
    return [...zbior].sort();
  }

  /**
   * Filtrowanie po nazwie i kuchni naraz.
   * Pusta fraza i kuchnia `null` oznaczaja brak zawezenia.
   */
  filtruj(
    slug: string,
    fraza: string = '',
    kuchnia: string | null = null
  ): PozycjaMenu[] {
    const wezel = this.wezel(slug);
    if (!wezel) return [];

    const szukane = fraza.trim().toLowerCase();
    return wezel.dzieci.filter((d) => {
      const pasujeNazwa =
        szukane === '' || d.nazwa.toLowerCase().includes(szukane);
      const pasujeKuchnia = kuchnia === null || d.kuchnia === kuchnia;
      return pasujeNazwa && pasujeKuchnia;
    });
  }

  /** Ile odnosnikow prowadzi do nieistniejacych podstron — liczone z danych. */
  brakujacePodstrony(): number {
    return MENU.reduce(
      (suma, w) => suma + w.dzieci.filter((d) => !d.dostepne).length,
      0
    );
  }
}
