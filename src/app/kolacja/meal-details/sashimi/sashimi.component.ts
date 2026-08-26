import { Component } from '@angular/core';

@Component({
  selector: 'app-sashimi',
  templateUrl: './sashimi.component.html',
  styleUrl: './sashimi.component.css'
})
export class SashimiComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Tuna', link: '/tuna-sashimi-details' },
    { name: 'Salmon', link: '/salmon-sashimi-details' },
    { name: 'Mackerel', link: '/mackerel-sashimi-details' },
    { name: 'Shrimp', link: '/shrimp-sashimi-details' },
    { name: 'Duck', link: '/duck-sashimi-details' },
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
    return `../assets/images/meals-kolacje/sashimi/${mealName}.png`;
  }
}
