import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-obiad',
  templateUrl: './meal-obiad.component.html',
  styleUrl: './meal-obiad.component.css'
})
export class MealObiadComponent {
  @Input() mealName: string = '';
  @Input() backgroundImageUrl: string = '';
  @Input() mealTextColor: string = 'white';
  @Input() isDarkMode: boolean = false;
}
