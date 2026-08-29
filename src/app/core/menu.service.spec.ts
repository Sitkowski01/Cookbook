import { TestBed } from '@angular/core/testing';

import { MENU } from './menu.data';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let serwis: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serwis = TestBed.inject(MenuService);
  });

  describe('spojnosc danych', () => {
    it('zawiera trzy kategorie glowne', () => {
      const slugi = serwis.kategorie().map((k) => k.slug);
      expect(slugi).toEqual(
        jasmine.arrayWithExactContents(['sniadanie', 'obiad', 'kolacja'])
      );
    });

    it('nie ma dwoch wezlow o tym samym slugu', () => {
      const slugi = MENU.map((w) => w.slug);
      expect(new Set(slugi).size).toBe(slugi.length);
    });

    it('kazdy wezel ma tytul i co najmniej jedno danie', () => {
      for (const wezel of MENU) {
        expect(wezel.tytul.length)
          .withContext(`pusty tytul w ${wezel.slug}`)
          .toBeGreaterThan(0);
        expect(wezel.dzieci.length)
          .withContext(`brak dan w ${wezel.slug}`)
          .toBeGreaterThan(0);
      }
    });

    it('flaga dostepne zgadza sie z faktycznym istnieniem wezla', () => {
      const istniejace = new Set(MENU.map((w) => w.slug));
      for (const wezel of MENU) {
        for (const danie of wezel.dzieci) {
          expect(danie.dostepne)
            .withContext(`${wezel.slug} -> ${danie.slug}`)
            .toBe(istniejace.has(danie.slug));
        }
      }
    });
  });

  describe('wezel', () => {
    it('zwraca strone po slugu', () => {
      expect(serwis.wezel('sniadanie')?.tytul).toBe('Breakfast');
    });

    it('zwraca undefined dla nieznanego slugu', () => {
      expect(serwis.wezel('nie-ma-takiego-dania')).toBeUndefined();
    });
  });

  describe('kuchnie', () => {
    it('wylicza liste kuchni z danych, bez powtorzen', () => {
      const kuchnie = serwis.kuchnie('sniadanie');
      expect(kuchnie.length).toBeGreaterThan(0);
      expect(new Set(kuchnie).size).toBe(kuchnie.length);
    });

    it('zwraca pusta liste tam, gdzie dania nie maja kuchni', () => {
      expect(serwis.kuchnie('curry-details')).toEqual([]);
    });

    it('zwraca pusta liste dla nieznanego slugu', () => {
      expect(serwis.kuchnie('brak')).toEqual([]);
    });
  });

  describe('filtruj', () => {
    it('bez argumentow oddaje komplet dan', () => {
      const wszystkie = serwis.wezel('sniadanie')!.dzieci.length;
      expect(serwis.filtruj('sniadanie').length).toBe(wszystkie);
    });

    it('szuka bez wzgledu na wielkosc liter', () => {
      const male = serwis.filtruj('sniadanie', 'omelette');
      const duze = serwis.filtruj('sniadanie', 'OMELETTE');
      expect(male.length).toBe(1);
      expect(duze).toEqual(male);
    });

    it('pomija biale znaki wokol frazy', () => {
      expect(serwis.filtruj('sniadanie', '   ').length).toBe(
        serwis.filtruj('sniadanie').length
      );
    });

    it('zaweza po kuchni', () => {
      const japonskie = serwis.filtruj('sniadanie', '', 'Japanese');
      expect(japonskie.length).toBeGreaterThan(0);
      expect(japonskie.every((d) => d.kuchnia === 'Japanese')).toBeTrue();
    });

    it('laczy fraze z kuchnia', () => {
      const wynik = serwis.filtruj('sniadanie', 'miso', 'Japanese');
      expect(wynik.length).toBe(1);
      expect(wynik[0].nazwa).toBe('Miso');
    });

    it('zwraca pusto, gdy fraza i kuchnia sie wykluczaja', () => {
      expect(serwis.filtruj('sniadanie', 'miso', 'Italian')).toEqual([]);
    });

    it('zwraca pusto dla nieznanego slugu', () => {
      expect(serwis.filtruj('brak', 'cokolwiek')).toEqual([]);
    });
  });

  describe('brakujacePodstrony', () => {
    it('liczy odnosniki bez wlasnej strony', () => {
      const oczekiwane = MENU.reduce(
        (s, w) => s + w.dzieci.filter((d) => !d.dostepne).length,
        0
      );
      expect(serwis.brakujacePodstrony()).toBe(oczekiwane);
    });
  });
});
