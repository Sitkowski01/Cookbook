import { Component } from '@angular/core';

@Component({
  selector: 'app-lasagne-details',
  templateUrl: './lasagne-details.component.html',
  styleUrl: './lasagne-details.component.css'
})
export class LasagneDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Beef', link: '/beef-lasagne-details' },
    { name: 'Vegetarian', link: '/vegetarian-lasagne-details' },
    { name: 'Seafood', link: '/seafood-lasagne-details' },
    { name: 'Chicken-and...', link: '/chicken-and-spinach-lasagne-details' },
    { name: 'Four-cheese', link: '/four-cheese-lasagne-details' },
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
    return `../assets/images/meals-obiady/lasagne/${mealName}.png`;
  }
}
