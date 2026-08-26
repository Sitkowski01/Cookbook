import { Component } from '@angular/core';

@Component({
  selector: 'app-silesian-noodles-details',
  templateUrl: './silesian-noodles-details.component.html',
  styleUrl: './silesian-noodles-details.component.css'
})
export class SilesianNoodlesDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Traditional', link: '/traditional-silesian-noodles-details' },
    { name: 'Drop-noodles', link: '/drop-noodles-details' },
    { name: 'Lazy...', link: '/lazy-dumplings-details' },
    { name: 'Steamed...', link: '/steamed-dumplings-details' },
    { name: 'Filled...', link: '/filled-dumplings-details' },
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
    return `../assets/images/meals-obiady/silesian-noodles/${mealName}.png`;
  }
}
