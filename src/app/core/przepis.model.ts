/**
 * Przepis — treść jednej strony dania.
 *
 * Trzymana jako dane, a nie jako komponent. Pierwotnie jedyny gotowy przepis
 * (Classic Boba Tea) był osobnym komponentem z tablicami wpisanymi w klasę;
 * przy 332 daniach oznaczałoby to 332 komponenty różniące się wyłącznie treścią.
 */
export interface Przepis {
  /** Ten sam slug, którym posługuje się menu, np. `classic-borscht-details`. */
  slug: string;
  /** Slug dania nadrzednego. Para (parent, slug) jest kluczem — sam slug nie,
   *  bo warianty typu 'classic-details' powtarzaja sie miedzy daniami. */
  parent: string;
  nazwa: string;
  /** Jedno–dwa zdania: co to jest i skąd pochodzi. */
  opis: string;
  porcje: number;
  /** Łączny czas przygotowania w minutach. */
  czasMinut: number;
  skladniki: string[];
  kroki: string[];
}
