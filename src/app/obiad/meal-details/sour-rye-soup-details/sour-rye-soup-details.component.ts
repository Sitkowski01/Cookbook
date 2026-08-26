import { Component } from '@angular/core';

@Component({
  selector: 'app-sour-rye-soup-details',
  templateUrl: './sour-rye-soup-details.component.html',
  styleUrl: './sour-rye-soup-details.component.css'
})
export class SourRyeSoupDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-sour-rye-soup-details' },
    { name: 'With-bacon...', link: '/sour-rye-soup-with-bacon-and-eggs-details' },
    { name: 'With-mushroom', link: '/sour-rye-soup-with-mushroom-details' },
    { name: 'With-white...', link: '/sour-rye-soup-with-white-sausage-details' },
    { name: 'Vegetarian', link: '/vegetarian-sour-rye-soup-details' },
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
    return `../assets/images/meals-obiady/sour-rye-soup/${mealName}.png`;
  }
}
