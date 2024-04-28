import { Component } from '@angular/core';

@Component({
  selector: 'app-pho',
  templateUrl: './pho.component.html',
  styleUrl: './pho.component.css'
})
export class PhoComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Beef', link: '/beef-pho-details' },
    { name: 'Chicken', link: '/chicken-pho-details' },
    { name: 'Vegetarian', link: '/vegetarian-pho-details' },
    { name: 'Seafood', link: '/seafood-pho-details' },
    { name: 'Spicy-beef', link: '/spicy-beef-pho-details' },
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
    return `../assets/images/meals-kolacje/pho/${mealName}.png`;
  }
}
