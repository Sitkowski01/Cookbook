# Cookbook — aplikacja z przepisami kulinarnymi

Aplikacja webowa z przepisami pogrupowanymi według pory posiłku: śniadanie, obiad
i kolacja. Każda kategoria ma własny widok i własną listę dań, a nawigacja opiera się
na routingu Angulara.

## Co zawiera

- Strona główna z wyborem kategorii
- **Trzy sekcje posiłków** — śniadanie, obiad, kolacja — każda jako osobny moduł widoku
- Widok karty menu z listą przepisów
- Renderowanie po stronie serwera (Angular Universal, `server.ts`)

## Stack

Angular 17 · TypeScript · Angular Universal (SSR)

## Uruchomienie

```bash
npm i
npm start          # serwer deweloperski na http://localhost:4200
npm run build      # build produkcyjny
```
