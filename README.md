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
| Testy | 82 zaślepki `should create` | **46 testów sprawdzających zachowanie** |
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

### Co ujawnił refaktor

Po zebraniu odnośników w jedno miejsce policzenie ich stało się trywialne:
**332 z 402 odnośników prowadziły do nieistniejących stron.** Kliknięcie w dowolny
wariant barszczu czy donburi dawało pustą stronę — nikt tego wcześniej nie widział,
bo dane leżały rozsypane po 73 plikach.

Nie da się tego naprawić dopisaniem 332 przepisów, więc dane niosą teraz flagę
`dostepne`, a kafelek bez własnej podstrony jest wyszarzony i opisany „wkrótce"
zamiast udawać działający odnośnik.

### Jak to jest zbudowane teraz

```
src/app/
  core/
    menu.model.ts       typy: WezelMenu, PozycjaMenu
    menu.data.ts        GENEROWANE — 73 węzły, 418 dań, wyciągnięte z komponentów
    menu.service.ts     wyszukiwanie, filtr kuchni, spójność danych
    motyw.service.ts    jasny/ciemny w sygnale, jeden na aplikację
  shared/
    kafelek-dania/      jeden kafelek zamiast trzech identycznych
  strony/
    kategoria/          JEDNA strona listy dla wszystkich 73 adresów
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

46 testów, wszystkie sprawdzają zachowanie, nie samo powstanie obiektu:

- **spójność danych** — brak duplikatów slugów, każdy węzeł ma tytuł i dania,
  flaga `dostepne` zgadza się z faktycznym istnieniem strony
- **wyszukiwarka** — niewrażliwość na wielkość liter, białe znaki, łączenie frazy z filtrem
- **routing** — pętla po wszystkich slugach z danych pilnująca, że żaden dotychczasowy
  adres nie przestał działać
- **motyw** — że jest jednym egzemplarzem na aplikację, czyli że pierwotny błąd nie wróci
- **kafelki** — że pozycja bez podstrony nie dostaje odnośnika

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

- Strony 332 wariantów, które dziś są oznaczone jako „wkrótce"
- Przepisy nadal są w kodzie, nie w bazie — naturalny następny krok to API
- Testy end-to-end klikające przez ścieżkę: kategoria → danie → lista zakupów
