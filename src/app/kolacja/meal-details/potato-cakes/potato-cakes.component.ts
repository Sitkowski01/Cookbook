import { Component } from '@angular/core';

@Component({
  selector: 'app-potato-cakes',
  templateUrl: './potato-cakes.component.html',
  styleUrl: './potato-cakes.component.css'
})
export class PotatoCakesComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Traditional', link: '/traditional-potato-cakes-details' },
    { name: 'Cheese', link: '/cheese-potato-cakes-details' },
    { name: 'Bacon', link: '/bacon-potato-cakes-details' },
    { name: 'Sweet', link: '/sweet-potato-cakes-details' },
    { name: 'Herbed', link: '/herbed-potato-cakes-details' },
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
    return `../assets/images/meals-kolacje/potato-cakes/${mealName}.png`;
  }
}
