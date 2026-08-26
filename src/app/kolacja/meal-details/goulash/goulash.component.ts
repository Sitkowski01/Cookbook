import { Component } from '@angular/core';

@Component({
  selector: 'app-goulash',
  templateUrl: './goulash.component.html',
  styleUrl: './goulash.component.css'
})
export class GoulashComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Beef', link: '/beef-goulash-details' },
    { name: 'Pork', link: '/pork-goulash-details' },
    { name: 'Chicken', link: '/chicken-goulash-details' },
    { name: 'Lamb', link: '/lamb-goulash-details' },
    { name: 'Vegetarian', link: '/vegetarian-goulash-details' },
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
    return `../assets/images/meals-kolacje/goulash/${mealName}.png`;
  }
}
