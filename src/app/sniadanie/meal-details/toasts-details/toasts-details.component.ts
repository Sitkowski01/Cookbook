import { Component } from '@angular/core';

@Component({
  selector: 'app-toasts-details',
  templateUrl: './toasts-details.component.html',
  styleUrl: './toasts-details.component.css'
})
export class ToastsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Avocado', link: '/avocado-details' },
    { name: 'Egg-in-a-hole', link: '/egg-in-a-hole-details' },
    { name: 'Cheese-and...', link: '/cheese-and-tomato-details' },
    { name: 'French', link: '/french-details' },
    { name: 'Ham-and-cheese', link: '/ham-and-cheese-details' },
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
    return `../assets/images/meals-sniadania/toasts/${mealName}.png`;
  }
}
