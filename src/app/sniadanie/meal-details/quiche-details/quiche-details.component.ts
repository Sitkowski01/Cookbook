import { Component } from '@angular/core';

@Component({
  selector: 'app-quiche-details',
  templateUrl: './quiche-details.component.html',
  styleUrl: './quiche-details.component.css'
})
export class QuicheDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Spinach-and...', link: '/spinach-and-feta-details' },
    { name: 'Bacon-and...', link: '/bacon-and-cheddar-details' },
    { name: 'Mushroom-and...', link: '/mushroom-and-swiss-details' },
    { name: 'Broccoli-and...', link: '/broccoli-and-cheddar-details' },
    { name: 'Tomato-and...', link: '/tomato-and-basil-details' },
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
    return `../assets/images/meals-sniadania/quiche/${mealName}.png`;
  }
}
