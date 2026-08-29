import { Przepis } from './przepis.model';
import { PACZKA_1 } from './przepisy/paczka-1';
import { PACZKA_2 } from './przepisy/paczka-2';
import { PACZKA_3 } from './przepisy/paczka-3';
import { PACZKA_4 } from './przepisy/paczka-4';
import { PACZKA_5 } from './przepisy/paczka-5';
import { PACZKA_6 } from './przepisy/paczka-6';

/**
 * Wszystkie przepisy w aplikacji.
 *
 * Podzielone na sześć plików wyłącznie dla wygody edycji — jeden plik
 * z kilkoma tysiącami linii jest nie do przejrzenia w recenzji.
 */
export const PRZEPISY: Przepis[] = [
  ...PACZKA_1,
  ...PACZKA_2,
  ...PACZKA_3,
  ...PACZKA_4,
  ...PACZKA_5,
  ...PACZKA_6,
];

/** Klucz przepisu: danie nadrzędne plus wariant. */
export const kluczPrzepisu = (parent: string, slug: string) => `${parent}/${slug}`;
