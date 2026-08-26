import { Component } from '@angular/core';

@Component({
  selector: 'app-calzone',
  templateUrl: './calzone.component.html',
  styleUrl: './calzone.component.css'
})
export class CalzoneComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Ham-and...', link: '/ham-and-cheese-calzone-details' },
    { name: 'Mushroom', link: '/mushroom-calzone-details' },
    { name: 'Vegetarian', link: '/vegetarian-calzone-details' },
    { name: 'Sausage', link: '/sausage-calzone-details' },
    { name: 'Ricotta-and...', link: '/ricotta-and-spinach-calzone-details' },
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
    return `../assets/images/meals-kolacje/calzone/${mealName}.png`;
  }
}
