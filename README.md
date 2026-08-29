# Cookbook — przepisy kulinarne w Angularze

[![CI](https://github.com/Sitkowski01/Cookbook/actions/workflows/ci.yml/badge.svg)](https://github.com/Sitkowski01/Cookbook/actions/workflows/ci.yml)

**[Demo na żywo →](https://cookbook-three-ebon.vercel.app/)**

Aplikacja z przepisami pogrupowanymi według pory posiłku — śniadanie, obiad, kolacja —
z renderowaniem po stronie serwera.

Projekt zaliczeniowy z trzeciego roku ZUT (2024), pierwsza rzecz, którą napisałem
w Angularze. **W sierpniu 2026 przepisałem go na architekturę serwisową.** Poprzednia
wersja README kończyła się zdaniem: *„przy dzisiejszym podejściu zrobiłbym to jednym
komponentem z parametrem trasy i danymi w serwisie"*. Ten dokument opisuje, jak to
wyglądało po zrobieniu.

## Refaktor: przed i po

| | Przed | Po |
|---|---:|---:|
| Komponenty | **82** | **8** |
| Trasy w routingu | **78** | **6** |
| Serwisy | **0** | 2 |
| Ręcznie pisany TypeScript | ~6 700 linii | **494 linie** |
| Testy | 82 zaślepki `should create` | **59 testów sprawdzających zachowanie** |
| Strony przepisów | 1 | **332** |
| CI | brak | GitHub Actions |

Adresy się nie zmieniły. `/sniadanie`, `/curry-details` i pozostałe 71 działają
dokładnie jak wcześniej — pilnuje tego test, który przechodzi po wszystkich slugach
z danych i sprawdza, że każdy nadal trafia w trasę.

### Na czym polegał problem

Każde z 73 dań miało własny komponent, a te komponenty różniły się wyłącznie tytułem,
tablicą dań i katalogiem obrazków. Cała reszta — wyszukiwarka, przełącznik motywu,
filtr kuchni — była w każdym z nich przeklejona:

```ts
// curry.component.ts, donburi-details.component.ts i 71 innych plików:
isBrightMode: boolean = false;
searchQuery: string = '';
filteredMeals: { name: string, link: string }[] = this.meals;

toggleTheme() { this.isBrightMode = !this.isBrightMode; }
searchItems() { /* ta sama piętnastolinijkowa metoda, 73 razy */ }
```

Skutki, poza samą objętością:

- **motyw nie przechodził między stronami** — każdy komponent miał własne `isBrightMode`,
  więc włączenie jasnego trybu na liście śniadań gasło po wejściu w danie
- poprawka w wyszukiwarce wymagała 73 identycznych edycji
- `app.module.ts` miał 182 linie samych deklaracji

### Co ujawnił refaktor — i co z tym zrobiłem

Po zebraniu odnośników w jedno miejsce policzenie ich stało się trywialne:
**332 z 418 pozycji prowadziły do nieistniejących stron.** Kliknięcie w dowolny
wariant barszczu czy donburi dawało pustą stronę — nikt tego wcześniej nie widział,
bo dane leżały rozsypane po 73 plikach.

Przez chwilę takie kafelki były po prostu wyszarzone i opisane „wkrótce".
Potem **dopisałem brakujące przepisy — wszystkie 332.** Dziś każda pozycja w menu
prowadzi albo do kolejnej listy, albo do gotowego przepisu: składniki, kroki,
czas przygotowania i liczba porcji. Pilnuje tego test, który przechodzi po całym
drzewie menu i nie pozwala, żeby została choć jedna pozycja bez treści.

Przepisy są **danymi, nie komponentami**. Gdyby pójść drogą pierwotnego autora,
oznaczałoby to 332 komponenty różniące się wyłącznie tablicami — czyli dokładnie
ten problem, który właśnie został usunięty. Klucz przepisu to para
**(danie, wariant)**, bo warianty w rodzaju `classic-details` powtarzają się
między müsli, owsianką i okonomiyaki; sam slug wskazywałby na jeden przepis dla
wszystkich trzech.

### Jak to jest zbudowane teraz

```
src/app/
  core/
    menu.model.ts       typy: WezelMenu, PozycjaMenu
    menu.data.ts        GENEROWANE — 73 węzły, 418 pozycji
    przepisy/           332 przepisy w sześciu plikach
    przepisy.service.ts wyszukiwanie po parze (danie, wariant)
    menu.service.ts     wyszukiwanie, filtr kuchni, spójność danych
    motyw.service.ts    jasny/ciemny w sygnale, jeden na aplikację
  shared/
    kafelek-dania/      jeden kafelek zamiast trzech identycznych
  strony/
    kategoria/          JEDNA strona listy dla wszystkich 73 adresów
    przepis/            JEDNA strona przepisu dla wszystkich 332 dań
  main-page/            ekran startowy
  menu-page/            widok karty menu
```

Trasa `:slug` obsługuje wszystkie 73 adresy, a `canMatch` wpuszcza na nią wyłącznie
slugi obecne w danych — dzięki temu nieznany adres leci na `**`, zamiast pokazywać
pusty szkielet strony:

```ts
export const istniejeWMenu: CanMatchFn = (_trasa, segmenty) =>
  !!inject(MenuService).wezel(segmenty[0]?.path ?? '');
```

Nowe komponenty są **standalone**, stan trzymają **sygnały**, a parametr trasy wchodzi
przez `toSignal`, więc przejście `/sniadanie` → `/obiad` nie tworzy komponentu od nowa.

## Testy

59 testów, wszystkie sprawdzają zachowanie, nie samo powstanie obiektu:

- **spójność danych** — brak duplikatów slugów, każdy węzeł ma tytuł i dania,
  flaga `dostepne` zgadza się z faktycznym istnieniem strony
- **wyszukiwarka** — niewrażliwość na wielkość liter, białe znaki, łączenie frazy z filtrem
- **routing** — pętla po wszystkich slugach z danych pilnująca, że żaden dotychczasowy
  adres nie przestał działać
- **motyw** — że jest jednym egzemplarzem na aplikację, czyli że pierwotny błąd nie wróci
- **kafelki** — że każda pozycja prowadzi gdzieś, a wariant kieruje na trasę przepisu
- **przepisy** — komplet pól, minimum trzy składniki i trzy kroki w każdym,
  brak duplikatów klucza (danie, wariant), zero pozycji bez treści

```bash
npm run test:ci
```

## Stack

| Warstwa | Technologie |
|---|---|
| Framework | Angular 17 (komponenty standalone, sygnały) |
| Język | TypeScript 5.2 |
| SSR | `@angular/ssr` + Express |
| Testy | Karma + Jasmine, Chrome headless |
| CI | GitHub Actions — testy i build produkcyjny z SSR |

## Uruchomienie

```bash
npm install
npm start            # http://localhost:4200
```

Build produkcyjny i wersja z SSR:

```bash
npm run build
npm run serve:ssr:cookbook
```

## Przed rozmową

Różnice Angular kontra React, z pytaniami kontrolnymi, leżą w drugim projekcie:
[ANGULAR-DLA-REACTOWCA.md](https://github.com/Sitkowski01/recall-lab/blob/main/ANGULAR-DLA-REACTOWCA.md).
Ten projekt pokazuje starszy Angular (17, NgModule, RxJS), tamten nowszy (22, standalone, sygnały).

## Co zostało do zrobienia

- Przepisy nadal są w kodzie, nie w bazie — naturalny następny krok to API
- Testy end-to-end klikające przez ścieżkę: kategoria → danie → lista zakupów
