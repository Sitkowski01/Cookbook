# Cookbook — przepisy kulinarne w Angularze

Aplikacja webowa z przepisami pogrupowanymi według pory posiłku: śniadanie, obiad i kolacja.
Każda potrawa ma własną podstronę ze składnikami i sposobem przygotowania, a całość działa
na routingu Angulara z renderowaniem po stronie serwera.

Projekt zaliczeniowy z trzeciego roku studiów na ZUT (2024) — pierwsza rzecz, którą napisałem
w Angularze.

## Co zawiera

- **Strona główna** z wyborem kategorii posiłku
- **Trzy sekcje** — śniadanie, obiad, kolacja — każda z własną listą dań i własnym widokiem
- **70 podstron potraw**, po jednej na danie: shakshuka, naleśniki, quiche, okonomiyaki,
  barszcz, kotlet schabowy, pierogi, cheeseburger, calzone, paella, pho, ossobuco i pozostałe
- Widok karty menu ze zdjęciami dań
- **Renderowanie po stronie serwera** (Angular SSR + Express, `server.ts`)

## Skala

| | |
|---|---|
| Komponenty | 81 |
| Trasy w routingu | 77 |
| Linie kodu (TS + HTML + CSS) | ~17 600 |
| Zdjęcia potraw | 427 |

## Stack

| Warstwa | Technologie |
|---|---|
| Framework | Angular 17 |
| Język | TypeScript 5.2 |
| SSR | `@angular/ssr` + Express |
| Style | CSS |

Dane przepisów są wpisane bezpośrednio w komponentach — aplikacja nie ma backendu ani
warstwy serwisów. Każda potrawa to osobny komponent z własną trasą; przy dzisiejszym
podejściu zrobiłbym to jednym komponentem z parametrem trasy i danymi w serwisie.

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

## Struktura

```
src/app/
  main-page/          ekran startowy z wyborem kategorii
  menu-page/          widok karty menu
  sniadanie/          sekcja + meal-details/ (23 potrawy)
  obiad/              sekcja + meal-details/ (25 potraw)
  kolacja/            sekcja + meal-details/ (22 potrawy)
  app-routing.module.ts
server.ts             serwer Express dla SSR
```
