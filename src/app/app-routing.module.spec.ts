import { TestBed } from '@angular/core/testing';
import { Route, UrlSegment } from '@angular/router';

import { istniejeWMenu } from './app-routing.module';
import { MENU } from './core/menu.data';

describe('trasa :slug', () => {
  const pusto = {} as Route;

  function sprawdz(sciezka: string): boolean {
    return TestBed.runInInjectionContext(
      () =>
        istniejeWMenu(pusto, [
          new UrlSegment(sciezka, {}),
        ]) as boolean
    );
  }

  beforeEach(() => TestBed.configureTestingModule({}));

  it('wpuszcza kategorie glowne', () => {
    expect(sprawdz('sniadanie')).toBeTrue();
    expect(sprawdz('obiad')).toBeTrue();
    expect(sprawdz('kolacja')).toBeTrue();
  });

  it('wpuszcza kazdy adres, ktory wczesniej mial wlasna trase', () => {
    // Sedno refaktoru: 78 tras zwinietych do jednej parametryzowanej.
    // Ten test pilnuje, ze zaden dotychczasowy adres nie przestal dzialac.
    for (const wezel of MENU) {
      expect(sprawdz(wezel.slug))
        .withContext(`adres /${wezel.slug} przestal dzialac`)
        .toBeTrue();
    }
  });

  it('odrzuca adres, ktorego nie ma w danych', () => {
    expect(sprawdz('cos-czego-nie-ma')).toBeFalse();
  });

  it('odrzuca pusty segment', () => {
    expect(
      TestBed.runInInjectionContext(() => istniejeWMenu(pusto, []) as boolean)
    ).toBeFalse();
  });
});
