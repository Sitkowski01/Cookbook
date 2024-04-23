import { Component } from '@angular/core';

@Component({
  selector: 'app-shrimps-details',
  templateUrl: './shrimps-details.component.html',
  styleUrl: './shrimps-details.component.css'
})
export class ShrimpsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Scampi', link: '/scampi-details' },
    { name: 'Coconut', link: '/coconut-details' },
    { name: 'Pad-thai', link: '/pad-thai-details' },
    { name: 'Coctail', link: '/coctail-details' },
    { name: 'Garlic-butter', link: '/garlic-butter-details' },
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
    return `../assets/images/meals-sniadania/shrimps/${mealName}.png`;
  }
}
