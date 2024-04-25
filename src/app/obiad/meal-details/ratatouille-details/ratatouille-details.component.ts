import { Component } from '@angular/core';

@Component({
  selector: 'app-ratatouille-details',
  templateUrl: './ratatouille-details.component.html',
  styleUrl: './ratatouille-details.component.css'
})
export class RatatouilleDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Traditional', link: '/traditional-ratatouille-details' },
    { name: 'Layered', link: '/layered-ratatouille-details' },
    { name: 'Niçoise', link: '/niçoise-ratatouille-details' },
    { name: 'Tian', link: '/tian-ratatouille-details' },
    { name: 'Roulade', link: '/ratatouille-roulade-details' },
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
    return `../assets/images/meals-obiady/ratatouille/${mealName}.png`;
  }
}
