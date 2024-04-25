import { Component } from '@angular/core';

@Component({
  selector: 'app-paella-details',
  templateUrl: './paella-details.component.html',
  styleUrl: './paella-details.component.css'
})
export class PaellaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Valencian', link: '/valencian-paella-details' },
    { name: 'Seafood', link: '/seafood-paella-details' },
    { name: 'Mixed', link: '/mixed-paella-details' },
    { name: 'Vegetarian', link: '/vegetarian-paella-details' },
    { name: 'Black', link: '/black-paella-details' },
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
    return `../assets/images/meals-obiady/paella/${mealName}.png`;
  }
}
