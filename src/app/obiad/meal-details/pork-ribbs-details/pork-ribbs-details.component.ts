import { Component } from '@angular/core';

@Component({
  selector: 'app-pork-ribbs-details',
  templateUrl: './pork-ribbs-details.component.html',
  styleUrl: './pork-ribbs-details.component.css'
})
export class PorkRibbsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Baby-back', link: '/baby-back-ribs-details' },
    { name: 'Country-style', link: '/country-style-ribs-details' },
    { name: 'Spareribs', link: '/spareribs-ribs-details' },
    { name: 'St.-louis-style', link: '/st.-louis-style-ribs-details' },
    { name: 'Tips', link: '/pork-ribs-tips-details' },
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
    return `../assets/images/meals-obiady/pork-ribbs/${mealName}.png`;
  }
}
