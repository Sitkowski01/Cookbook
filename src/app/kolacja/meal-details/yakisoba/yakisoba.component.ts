import { Component } from '@angular/core';

@Component({
  selector: 'app-yakisoba',
  templateUrl: './yakisoba.component.html',
  styleUrl: './yakisoba.component.css'
})
export class YakisobaComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Chicken', link: '/chicken-yakisoba-details' },
    { name: 'Beef', link: '/beef-yakisoba-details' },
    { name: 'Vegetarian', link: '/vegetarian-yakisoba-details' },
    { name: 'Shrimp', link: '/shrimp-yakisoba-details' },
    { name: 'Pork', link: '/pork-yakisoba-details' },
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
    return `../assets/images/meals-kolacje/yakisoba/${mealName}.png`;
  }
}
