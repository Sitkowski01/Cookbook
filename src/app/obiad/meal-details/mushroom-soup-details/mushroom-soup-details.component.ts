import { Component } from '@angular/core';

@Component({
  selector: 'app-mushroom-soup-details',
  templateUrl: './mushroom-soup-details.component.html',
  styleUrl: './mushroom-soup-details.component.css'
})
export class MushroomSoupDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Cream-of', link: '/cream-of-mushroom-soup-details' },
    { name: 'Wild', link: '/wild-mushroom-soup-details' },
    { name: 'Barley', link: '/barley-mushroom-soup-details' },
    { name: 'Miso', link: '/miso-mushroom-soup-details' },
    { name: 'Creamy-with...', link: '/creamy-with-potato-mushroom-soup-details' },
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
    return `../assets/images/meals-obiady/mushroom-soup/${mealName}.png`;
  }
}
