import { Component } from '@angular/core';

@Component({
  selector: 'app-grilled-bream',
  templateUrl: './grilled-bream.component.html',
  styleUrl: './grilled-bream.component.css'
})
export class GrilledBreamComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'With-lemon...', link: '/grilled-bream-with-lemon-butter-sauce-details' },
    { name: 'Mediterranean', link: '/mediterranean-spicy-grilled-details' },
    { name: 'With-herbs', link: '/grilled-bream-with-herbs-details' },
    { name: 'Spicy', link: '/spicy-grilled-bream-details' },
    { name: 'With-garlic...', link: '/grilled-bream-with-garlic-aioli-details' },
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
    return `../assets/images/meals-kolacje/grilled-bream/${mealName}.png`;
  }
}
