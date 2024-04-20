import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-kolacja',
  templateUrl: './meal-kolacja.component.html',
  styleUrl: './meal-kolacja.component.css'
})
export class MealKolacjaComponent {
  @Input() mealName: string = '';
  @Input() backgroundImageUrl: string = '';
  @Input() mealTextColor: string = 'white';
  @Input() isBrightkMode: boolean = false;
  @Input() link: string = '';
}
