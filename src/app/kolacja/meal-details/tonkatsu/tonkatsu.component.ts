import { Component } from '@angular/core';

@Component({
  selector: 'app-tonkatsu',
  templateUrl: './tonkatsu.component.html',
  styleUrl: './tonkatsu.component.css'
})
export class TonkatsuComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Katsu-don', link: '/katsu-don-details' },
    { name: 'Chicken', link: '/chicken-tonkatsu-details' },
    { name: 'Pork', link: '/pork-tonkatsu-details' },
    { name: 'Shrimp', link: '/shrimp-tonkatsu-details' },
    { name: 'Vegetarian', link: '/vegetarian-tonkatsu-details' },
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
    return `../assets/images/meals-kolacje/tonkatsu/${mealName}.png`;
  }
}
