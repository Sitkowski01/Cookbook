import { Component } from '@angular/core';

@Component({
  selector: 'app-coq-au-vin-details',
  templateUrl: './coq-au-vin-details.component.html',
  styleUrl: './coq-au-vin-details.component.css'
})
export class CoqAuVinDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Traditional', link: '/traditional-coq-au-vin-details' },
    { name: 'White-wine', link: '/white-coq-au-vin-wine-details' },
    { name: 'Mushroom', link: '/mushroom-coq-au-vin-details' },
    { name: 'Vegetable', link: '/vegetable-coq-au-vin-details' },
    { name: 'Seafood', link: '/seafood-coq-au-vin-details' },
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
    return `../assets/images/meals-obiady/coq-au-vin/${mealName}.png`;
  }
}
