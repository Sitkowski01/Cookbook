import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-sniadanie',
  templateUrl: './meal-sniadanie.component.html',
  styleUrl: './meal-sniadanie.component.css'
})
export class MealSniadanieComponent {
  @Input() mealName: string = '';
  @Input() backgroundImageUrl: string = '';
  @Input() mealTextColor: string = 'white';
  @Input() isDarkMode: boolean = false;
  
}
