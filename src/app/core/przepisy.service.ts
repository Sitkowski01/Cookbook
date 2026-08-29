import { Injectable } from '@angular/core';

import { kluczPrzepisu, PRZEPISY } from './przepisy.data';
import { Przepis } from './przepis.model';

/**
 * Dostęp do przepisów.
 *
 * Klucz to para (danie nadrzędne, wariant), a nie sam slug — w pierwotnych
 * danych warianty typu `classic-details` powtarzają się między müsli, owsianką
 * i okonomiyaki. Gdyby kluczem był sam slug, wszystkie trzy pokazywałyby
 * ten sam przepis.
 */
@Injectable({ providedIn: 'root' })
export class PrzepisyService {
  private readonly wgKlucza = new Map<string, Przepis>(
    PRZEPISY.map((p) => [kluczPrzepisu(p.parent, p.slug), p])
  );

  przepis(parent: string, slug: string): Przepis | undefined {
    return this.wgKlucza.get(kluczPrzepisu(parent, slug));
  }

  czyIstnieje(parent: string, slug: string): boolean {
    return this.wgKlucza.has(kluczPrzepisu(parent, slug));
  }

  /** Pozostałe warianty tego samego dania — do nawigacji „zobacz też". */
  rodzenstwo(parent: string, slug: string): Przepis[] {
    return PRZEPISY.filter((p) => p.parent === parent && p.slug !== slug);
  }

  ile(): number {
    return this.wgKlucza.size;
  }
}
