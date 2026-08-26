import { Component } from '@angular/core';

@Component({
  selector: 'app-pad-thai-details',
  templateUrl: './pad-thai-details.component.html',
  styleUrl: './pad-thai-details.component.css'
})
export class PadThaiDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-pad-thai-details' },
    { name: 'Vegetarian', link: '/vegetarian-pad-thai-details' },
    { name: 'Seafood', link: '/seafood-pad-thai-details' },
    { name: 'Chicken', link: '/chicken-pad-thai-details' },
    { name: 'Tofu', link: '/tofu-pad-thai-details' },
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
    return `../assets/images/meals-obiady/pad-thai/${mealName}.png`;
  }
}
