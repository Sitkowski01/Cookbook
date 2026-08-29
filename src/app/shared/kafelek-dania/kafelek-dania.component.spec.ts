import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafelekDaniaComponent } from './kafelek-dania.component';

describe('KafelekDaniaComponent', () => {
  let fixture: ComponentFixture<KafelekDaniaComponent>;
  let komponent: KafelekDaniaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafelekDaniaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KafelekDaniaComponent);
    komponent = fixture.componentInstance;
    komponent.nazwa = 'Miso';
    komponent.obraz = 'assets/images/miso.png';
    fixture.detectChanges();
  });

  it('pokazuje nazwe dania', () => {
    expect(fixture.nativeElement.querySelector('figcaption').textContent.trim()).toBe('Miso');
  });

  it('wstawia zdjecie jako element img, nie jako tlo w CSS', () => {
    // Prawdziwy <img> daje leniwe ladowanie i tekst alternatywny,
    // czego tlo w CSS nie potrafi.
    const obraz: HTMLImageElement = fixture.nativeElement.querySelector('.kafelek img');
    expect(obraz).not.toBeNull();
    expect(obraz.getAttribute('src')).toBe('assets/images/miso.png');
    expect(obraz.getAttribute('loading')).toBe('lazy');
  });

  it('opisuje zdjecie nazwa dania', () => {
    const obraz: HTMLImageElement = fixture.nativeElement.querySelector('.kafelek img');
    expect(obraz.getAttribute('alt')).toBe('Miso');
  });

  it('dostepny kafelek nie ma znacznika ani wyszarzenia', () => {
    expect(fixture.nativeElement.querySelector('.wkrotce')).toBeNull();
    expect(fixture.nativeElement.querySelector('.kafelek.niedostepne')).toBeNull();
  });

  it('niedostepny kafelek jest oznaczony', () => {
    komponent.dostepne = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.wkrotce').textContent.trim()).toBe('wkrótce');
    expect(fixture.nativeElement.querySelector('.kafelek.niedostepne')).not.toBeNull();
  });
});
