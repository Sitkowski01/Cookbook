import { Component } from '@angular/core';

@Component({
  selector: 'app-trout-details',
  templateUrl: './trout-details.component.html',
  styleUrl: './trout-details.component.css'
})
export class TroutDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Rainbow', link: '/rainbow-trout-details' },
    { name: 'Brown', link: '/brown-trout-details' },
    { name: 'Brook', link: '/brook-trout-details' },
    { name: 'Lake', link: '/lake-trout-details' },
    { name: 'Cutthroat', link: '/cutthroat-trout-details' },
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
    return `../assets/images/meals-obiady/trout/${mealName}.png`;
  }
}
