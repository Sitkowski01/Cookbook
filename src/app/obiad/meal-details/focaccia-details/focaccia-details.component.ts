import { Component } from '@angular/core';

@Component({
  selector: 'app-focaccia-details',
  templateUrl: './focaccia-details.component.html',
  styleUrl: './focaccia-details.component.css'
})
export class FocacciaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-focaccia-details' },
    { name: 'Rosemary', link: '/rosemary-focaccia-details' },
    { name: 'Tomato-and...', link: '/tomato-and-basil-focaccia-details' },
    { name: 'Onion', link: '/onion-focaccia-details' },
    { name: 'Olive', link: '/olive-focaccia-details' },
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
    return `../assets/images/meals-obiady/focaccia/${mealName}.png`;
  }
}
