import { Injectable, signal } from '@angular/core';

/**
 * Motyw jasny/ciemny.
 *
 * Wczesniej kazdy z 82 komponentow trzymal wlasne `isBrightMode` i wlasny
 * `toggleTheme()`, wiec przelaczenie motywu na jednej stronie nie przenosilo
 * sie na kolejna. Tutaj stan jest jeden, w sygnale.
 */
@Injectable({ providedIn: 'root' })
export class MotywService {
  private readonly jasny = signal(false);

  /** Tylko do odczytu dla szablonow. */
  readonly czyJasny = this.jasny.asReadonly();

  przelacz(): void {
    this.jasny.update((v) => !v);
  }

  ustaw(wartosc: boolean): void {
    this.jasny.set(wartosc);
  }
}
