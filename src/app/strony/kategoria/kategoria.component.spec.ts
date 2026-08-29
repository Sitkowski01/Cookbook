import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { KategoriaComponent } from './kategoria.component';
import { MotywService } from '../../core/motyw.service';

describe('KategoriaComponent', () => {
  let fixture: ComponentFixture<KategoriaComponent>;
  let komponent: KategoriaComponent;
  let parametry: BehaviorSubject<ParamMap>;

  async function zbuduj(slug: string) {
    parametry = new BehaviorSubject(convertToParamMap({ slug }));

    await TestBed.configureTestingModule({
      imports: [KategoriaComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: parametry } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriaComponent);
    komponent = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('czyta slug z adresu i znajduje strone', async () => {
    await zbuduj('sniadanie');
    expect(komponent.wezel()?.tytul).toBe('Breakfast');
  });

  it('reaguje na zmiane adresu bez tworzenia komponentu od nowa', async () => {
    await zbuduj('sniadanie');
    parametry.next(convertToParamMap({ slug: 'obiad' }));
    fixture.detectChanges();
    expect(komponent.wezel()?.slug).toBe('obiad');
  });

  it('dla nieznanego slugu nie ma wezla i pokazuje komunikat', async () => {
    await zbuduj('nie-ma-takiej-strony');
    fixture.detectChanges();
    expect(komponent.wezel()).toBeUndefined();
    const tekst: string = fixture.nativeElement.textContent;
    expect(tekst).toContain('Nie ma takiej strony');
  });

  it('wyszukiwarka zaweza liste kafelkow', async () => {
    await zbuduj('sniadanie');
    const wszystkie = komponent.widoczne().length;

    komponent.fraza.set('miso');
    fixture.detectChanges();

    expect(komponent.widoczne().length).toBeLessThan(wszystkie);
    expect(komponent.widoczne()[0].nazwa).toBe('Miso');
  });

  it('zamkniecie wyszukiwarki czysci fraze', async () => {
    await zbuduj('sniadanie');
    komponent.przelaczSzukanie();
    komponent.fraza.set('miso');

    komponent.przelaczSzukanie();

    expect(komponent.szukanieOtwarte()).toBeFalse();
    expect(komponent.fraza()).toBe('');
  });

  it('filtr kuchni zostawia tylko pasujace dania', async () => {
    await zbuduj('sniadanie');
    komponent.wybierzKuchnie('Japanese');
    fixture.detectChanges();

    expect(komponent.widoczne().length).toBeGreaterThan(0);
    expect(komponent.widoczne().every((d) => d.kuchnia === 'Japanese')).toBeTrue();
  });

  it('motyw idzie przez wspolny serwis, nie przez pole komponentu', async () => {
    await zbuduj('sniadanie');
    const motyw = TestBed.inject(MotywService);

    komponent.przelaczMotyw();

    expect(motyw.czyJasny()).toBeTrue();
    expect(komponent.czyJasny()).toBeTrue();
  });

  it('kafelek bez wlasnej podstrony nie dostaje odnosnika', async () => {
    // beetroot-soup-details ma same warianty, ktorych strony nie powstaly
    await zbuduj('beetroot-soup-details');
    fixture.detectChanges();

    const odnosniki = fixture.nativeElement.querySelectorAll('a.odnosnik-kafelka');
    expect(komponent.widoczne().length).toBeGreaterThan(0);
    expect(odnosniki.length).toBe(0);
  });

  it('kafelek z istniejaca podstrona dostaje odnosnik', async () => {
    await zbuduj('sniadanie');
    fixture.detectChanges();

    const odnosniki = fixture.nativeElement.querySelectorAll('a.odnosnik-kafelka');
    expect(odnosniki.length).toBe(komponent.widoczne().length);
  });
});
