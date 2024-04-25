import { Component } from '@angular/core';

@Component({
  selector: 'app-spaghetti-details',
  templateUrl: './spaghetti-details.component.html',
  styleUrl: './spaghetti-details.component.css'
})
export class SpaghettiDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Carbonara', link: '/spaghetti-carbonara-details' },
    { name: 'Bolognese', link: '/spaghetti-bolognese-details' },
    { name: 'Aglio-e-olio', link: '/spaghetti-aglio-e-olio-details' },
    { name: 'Alle-vongole', link: '/spaghetti-alle-vongole-details' },
    { name: 'Alla-puttanesca', link: '/spaghetti-alla-puttanesca-details' },
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
    return `../assets/images/meals-obiady/spaghetti/${mealName}.png`;
  }
}
