import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Kafelek dania.
 *
 * Zastepuje trzy identyczne komponenty (`app-meal-sniadanie`, `app-meal-obiad`,
 * `app-meal-kolacja`), ktore roznily sie wylacznie nazwa selektora.
 */
@Component({
  selector: 'app-kafelek-dania',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kafelek-dania.component.html',
  styleUrl: './kafelek-dania.component.css',
})
export class KafelekDaniaComponent {
  @Input({ required: true }) nazwa = '';
  @Input({ required: true }) obraz = '';
  /** Gdy false, kafelek jest wyszarzony i opisany jako niedostepny. */
  @Input() dostepne = true;
}
