/** Pojedynczy kafelek na liscie — danie albo jego wariant. */
export interface PozycjaMenu {
  /** Nazwa wyswietlana, np. "Shakshouka". */
  nazwa: string;
  /** Fragment adresu, np. "shakshouka-details". */
  slug: string;
  /** Sciezka do obrazka wzgledem katalogu z zasobami. */
  obraz: string;
  /**
   * Czy pod tym slugiem istnieje podstrona.
   * W wersji sprzed refaktoru 332 z 402 odnosnikow prowadzilo donikad —
   * ta flaga sprawia, ze zamiast pustej strony pokazujemy stan "wkrotce".
   */
  dostepne: boolean;
  /** Kuchnia, po ktorej filtruja strony kategorii. */
  kuchnia?: string;
}

/** Wezel drzewa menu: kategoria (sniadanie) albo danie z wariantami (curry). */
export interface WezelMenu {
  slug: string;
  tytul: string;
  /** true dla sniadania, obiadu i kolacji — te maja filtr kuchni. */
  kategoria: boolean;
  dzieci: PozycjaMenu[];
}
