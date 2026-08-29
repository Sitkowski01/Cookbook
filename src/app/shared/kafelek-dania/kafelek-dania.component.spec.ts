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
    expect(fixture.nativeElement.textContent).toContain('Miso');
  });

  it('wstawia obrazek jako tlo', () => {
    const tlo: HTMLElement = fixture.nativeElement.querySelector('.meal-background');
    expect(tlo.style.backgroundImage).toContain('assets/images/miso.png');
  });

  it('dostepny kafelek nie ma znacznika ani wyszarzenia', () => {
    expect(fixture.nativeElement.querySelector('.znacznik-wkrotce')).toBeNull();
    expect(
      fixture.nativeElement.querySelector('.meal-background.niedostepne')
    ).toBeNull();
  });

  it('niedostepny kafelek jest oznaczony', () => {
    komponent.dostepne = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.znacznik-wkrotce').textContent.trim())
      .toBe('wkrótce');
    expect(
      fixture.nativeElement.querySelector('.meal-background.niedostepne')
    ).not.toBeNull();
  });

  it('jasny motyw zmienia kolor napisu', () => {
    const napis: HTMLElement = fixture.nativeElement.querySelector('.meal-name');
    expect(napis.style.color).toBe('white');

    komponent.jasnyMotyw = true;
    fixture.detectChanges();

    expect(napis.style.color).toBe('rgb(238, 238, 238)');
  });
});
