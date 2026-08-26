import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-salad',
  templateUrl: './vegetable-salad.component.html',
  styleUrl: './vegetable-salad.component.css'
})
export class VegetableSaladComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Caesar', link: '/caesar-salad-details' },
    { name: 'Caprese', link: '/caprese-salad-details' },
    { name: 'Cobb', link: '/cobb-salad-details' },
    { name: 'Greek', link: '/greek-salad-details' },
    { name: 'Waldorf', link: '/waldorf-salad-details' },
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
    return `../assets/images/meals-kolacje/vegetable-salad/${mealName}.png`;
  }
}
