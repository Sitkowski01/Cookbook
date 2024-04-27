import { Component } from '@angular/core';

@Component({
  selector: 'app-udon',
  templateUrl: './udon.component.html',
  styleUrl: './udon.component.css'
})
export class UdonComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Tofu', link: '/tofu-udon-details' },
    { name: 'Beef', link: '/beef-udon-details' },
    { name: 'Chicken', link: '/chicken-udon-details' },
    { name: 'Shrimp', link: '/shrimp-udon-details' },
    { name: 'Vegetable', link: '/vegetable-udon-details' },
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
    return `../assets/images/meals-kolacje/udon/${mealName}.png`;
  }
}
