import { Component } from '@angular/core';

@Component({
  selector: 'app-tandoori',
  templateUrl: './tandoori.component.html',
  styleUrl: './tandoori.component.css'
})
export class TandooriComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Chicken', link: '/chicken-tandoori-details' },
    { name: 'Lamb', link: '/lamb-tandoori-details' },
    { name: 'Fish', link: '/fish-tandoori-details' },
    { name: 'Paneer', link: '/paneer-tandoori-details' },
    { name: 'Mixed-grill', link: '/mixed-grill-tandoori-details' },
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
    return `../assets/images/meals-kolacje/tandoori/${mealName}.png`;
  }
}
