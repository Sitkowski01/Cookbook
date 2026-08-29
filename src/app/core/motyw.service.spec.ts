import { TestBed } from '@angular/core/testing';

import { MotywService } from './motyw.service';

describe('MotywService', () => {
  let serwis: MotywService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serwis = TestBed.inject(MotywService);
  });

  it('startuje w motywie ciemnym', () => {
    expect(serwis.czyJasny()).toBeFalse();
  });

  it('przelacza tam i z powrotem', () => {
    serwis.przelacz();
    expect(serwis.czyJasny()).toBeTrue();
    serwis.przelacz();
    expect(serwis.czyJasny()).toBeFalse();
  });

  it('ustawia wartosc wprost', () => {
    serwis.ustaw(true);
    expect(serwis.czyJasny()).toBeTrue();
  });

  it('jest jednym egzemplarzem na cala aplikacje', () => {
    // To jest sedno refaktoru: wczesniej kazdy komponent mial wlasne
    // `isBrightMode`, wiec motyw nie przechodzil miedzy stronami.
    const drugi = TestBed.inject(MotywService);
    serwis.ustaw(true);
    expect(drugi.czyJasny()).toBeTrue();
    expect(drugi).toBe(serwis);
  });
});
