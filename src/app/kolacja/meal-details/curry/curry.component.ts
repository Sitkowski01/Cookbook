import { Component } from '@angular/core';

@Component({
  selector: 'app-curry',
  templateUrl: './curry.component.html',
  styleUrl: './curry.component.css'
})
export class CurryComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Chicken', link: '/chicken-curry-details' },
    { name: 'Lamb', link: '/lamb-curry-details' },
    { name: 'Vegetable', link: '/vegetable-curry-details' },
    { name: 'Fish', link: '/fish-curry-details' },
    { name: 'Beef', link: '/beef-curry-details' },
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
    return `../assets/images/meals-kolacje/curry/${mealName}.png`;
  }
}
