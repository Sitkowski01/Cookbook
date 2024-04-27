import { Component } from '@angular/core';

@Component({
  selector: 'app-tagliatelle',
  templateUrl: './tagliatelle.component.html',
  styleUrl: './tagliatelle.component.css'
})
export class TagliatelleComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Mushroom', link: '/mushroom-tagliatelle-details' },
    { name: 'Spinach', link: '/spinach-tagliatelle-details' },
    { name: 'Shrimp', link: '/shrimp-tagliatelle-details' },
    { name: 'Chicken', link: '/chicken-tagliatelle-details' },
    { name: 'Tomato-sauce', link: '/tomato-sauce-tagliatelle-details' },
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
    return `../assets/images/meals-kolacje/tagliatelle/${mealName}.png`;
  }
}
