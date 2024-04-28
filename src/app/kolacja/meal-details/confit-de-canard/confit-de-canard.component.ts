import { Component } from '@angular/core';

@Component({
  selector: 'app-confit-de-canard',
  templateUrl: './confit-de-canard.component.html',
  styleUrl: './confit-de-canard.component.css'
})
export class ConfitDeCanardComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Traditional', link: '/traditional-confit-de-canard-details' },
    { name: 'Confit-duck-o...', link: '/confit-duck-leg-with-orange-sauce-details' },
    { name: 'Confit-duck-ch...', link: '/confit-duck-leg-with-cherry-sauce-details' },
    { name: 'Confit-duck-w...', link: '/confit-duck-leg-with-red-wine-sauce-details' },
    { name: 'Confit-duck-s...', link: '/confit-duck-leg-salad-details' },
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
    return `../assets/images/meals-kolacje/confit-de-canard/${mealName}.png`;
  }
}
