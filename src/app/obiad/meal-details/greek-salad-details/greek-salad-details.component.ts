import { Component } from '@angular/core';

@Component({
  selector: 'app-greek-salad-details',
  templateUrl: './greek-salad-details.component.html',
  styleUrl: './greek-salad-details.component.css'
})
export class GreekSaladDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-greek-salad-details' },
    { name: 'Horiatiki', link: '/horiatiki-greek-salad-details' },
    { name: 'With-avocado', link: '/greek-salad-with-avocado-details' },
    { name: 'Grilled', link: '/grilled-greek-salad-details' },
    { name: 'Quinoa', link: '/quinoa-greek-salad-details' },
];

  isBrightMode: boolean = false;
  searchQuery: string = '';
  filteredMeals: { name: string, link: string }[] = this.meals;
  isSearching: boolean = false;

  selectItem(index: number) {
    this.selectedIndex = index;
  }

  isActive(index: number): boolean {
    return index === this.selectedIndex;
  }

  toggleSearch() {
    this.isSearching = !this.isSearching;
    if (this.isSearching) {
      this.searchItems();
    } else {
      this.searchQuery = '';
      this.searchItems();
    }
  }

  searchItems() {
    if (this.searchQuery.trim() === '') {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter(meal => meal.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }

  toggleTheme() {
    this.isBrightMode = !this.isBrightMode;
  }

  getBackgroundImageUrl(mealName: string): string {
    return `../assets/images/meals-obiady/greek-salad/${mealName}.png`;
  }
}
