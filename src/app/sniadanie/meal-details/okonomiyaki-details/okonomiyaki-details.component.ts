import { Component } from '@angular/core';

@Component({
  selector: 'app-okonomiyaki-details',
  templateUrl: './okonomiyaki-details.component.html',
  styleUrl: './okonomiyaki-details.component.css'
})
export class OkonomiyakiDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-details' },
    { name: 'Hiroshima', link: '/hiroshima-details' },
    { name: 'Seafood', link: '/seafood-details' },
    { name: 'Vegetarian', link: '/vegetarian-details' },
    { name: 'Modern-fusion', link: '/modern-fusion-details' },
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
    return `../assets/images/okonomiyaki/${mealName}.png`;
  }
}
