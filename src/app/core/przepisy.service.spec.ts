import { TestBed } from '@angular/core/testing';

import { MENU } from './menu.data';
import { MenuService } from './menu.service';
import { PRZEPISY, kluczPrzepisu } from './przepisy.data';
import { PrzepisyService } from './przepisy.service';

describe('PrzepisyService', () => {
  let serwis: PrzepisyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serwis = TestBed.inject(PrzepisyService);
  });

  describe('spojnosc danych', () => {
    it('kazdy przepis ma komplet pol', () => {
      for (const p of PRZEPISY) {
        const gdzie = `${p.parent}/${p.slug}`;
        expect(p.nazwa.length).withContext(`brak nazwy: ${gdzie}`).toBeGreaterThan(0);
        expect(p.opis.length).withContext(`brak opisu: ${gdzie}`).toBeGreaterThan(10);
        expect(p.porcje).withContext(`zle porcje: ${gdzie}`).toBeGreaterThan(0);
        expect(p.czasMinut).withContext(`zly czas: ${gdzie}`).toBeGreaterThan(0);
      }
    });

    it('kazdy przepis ma skladniki i kroki', () => {
      for (const p of PRZEPISY) {
        const gdzie = `${p.parent}/${p.slug}`;
        expect(p.skladniki.length).withContext(`za malo skladnikow: ${gdzie}`).toBeGreaterThanOrEqual(3);
        expect(p.kroki.length).withContext(`za malo krokow: ${gdzie}`).toBeGreaterThanOrEqual(3);
      }
    });

    it('nie ma dwoch przepisow o tym samym kluczu', () => {
      // Sam slug nie wystarcza: 'classic-details' wystepuje w muesli, owsiance
      // i okonomiyaki. Kluczem jest para (danie, wariant).
      const klucze = PRZEPISY.map((p) => kluczPrzepisu(p.parent, p.slug));
      expect(new Set(klucze).size).toBe(klucze.length);
    });

    it('kazdy przepis wskazuje na istniejace danie nadrzedne', () => {
      const wezly = new Set(MENU.map((w) => w.slug));
      for (const p of PRZEPISY) {
        expect(wezly.has(p.parent)).withContext(`nieznane danie: ${p.parent}`).toBeTrue();
      }
    });

    it('kazdy przepis odpowiada pozycji w menu', () => {
      for (const p of PRZEPISY) {
        const wezel = MENU.find((w) => w.slug === p.parent)!;
        const pozycja = wezel.dzieci.find((d) => d.slug === p.slug);
        expect(pozycja).withContext(`przepis bez pozycji w menu: ${p.parent}/${p.slug}`).toBeDefined();
      }
    });

    it('kroki nie sa puste', () => {
      for (const p of PRZEPISY) {
        for (const krok of p.kroki) {
          expect(krok.trim().length).withContext(`pusty krok w ${p.slug}`).toBeGreaterThan(5);
        }
      }
    });
  });

  describe('wyszukiwanie', () => {
    it('znajduje przepis po parze danie/wariant', () => {
      const p = serwis.przepis('boba-tea-details', 'classic-boba-tea-details');
      expect(p?.nazwa).toBe('Classic boba tea');
    });

    it('ten sam wariant pod roznymi daniami to rozne przepisy', () => {
      // To jest cala racja bytu klucza zlozonego.
      const muesli = serwis.przepis('muesli-details', 'classic-details');
      const owsianka = serwis.przepis('oatmeal-details', 'classic-details');

      expect(muesli).toBeDefined();
      expect(owsianka).toBeDefined();
      expect(muesli!.nazwa).not.toBe(owsianka!.nazwa);
    });

    it('zwraca undefined dla nieznanej pary', () => {
      expect(serwis.przepis('muesli-details', 'nie-ma-takiego')).toBeUndefined();
      expect(serwis.przepis('nie-ma-dania', 'classic-details')).toBeUndefined();
    });

    it('rodzenstwo pomija biezacy przepis', () => {
      const inne = serwis.rodzenstwo('curry-details', 'chicken-curry-details');
      expect(inne.length).toBeGreaterThan(0);
      expect(inne.some((p) => p.slug === 'chicken-curry-details')).toBeFalse();
      expect(inne.every((p) => p.parent === 'curry-details')).toBeTrue();
    });
  });

  describe('powiazanie z menu', () => {
    it('kazda pozycja menu ma napisany przepis albo prowadzi do listy', () => {
      // Po uzupelnieniu przepisow w aplikacji nie powinno zostac ani jedno
      // "wkrotce" — to jest test, ktory tego pilnuje.
      const wezly = new Set(MENU.map((w) => w.slug));
      const brakujace: string[] = [];

      for (const wezel of MENU) {
        for (const danie of wezel.dzieci) {
          const maListe = wezly.has(danie.slug);
          const maPrzepis = serwis.czyIstnieje(wezel.slug, danie.slug);
          if (!maListe && !maPrzepis) brakujace.push(`${wezel.slug}/${danie.slug}`);
        }
      }

      expect(brakujace).withContext(`bez tresci: ${brakujace.slice(0, 5).join(', ')}`).toEqual([]);
    });

    it('MenuService oznacza wszystkie pozycje jako dostepne', () => {
      const menu = TestBed.inject(MenuService);
      for (const wezel of MENU) {
        for (const danie of menu.filtruj(wezel.slug)) {
          expect(danie.dostepne).withContext(`${wezel.slug} -> ${danie.slug}`).toBeTrue();
        }
      }
    });
  });
});
