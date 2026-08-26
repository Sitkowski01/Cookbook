import { Component } from '@angular/core';

@Component({
  selector: 'app-dumplings-details',
  templateUrl: './dumplings-details.component.html',
  styleUrl: './dumplings-details.component.css'
})
export class DumplingsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Chinese', link: '/chinese-dumplings-details' },
    { name: 'Japanese', link: '/japanese-dumplings-details' },
    { name: 'Korean', link: '/korean-dumplings-details' },
    { name: 'Polish', link: '/polish-dumplings-details' },
    { name: 'Tibetan', link: '/tibetan-dumplings-details' },
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
    return `../assets/images/meals-obiady/dumplings/${mealName}.png`;
  }
}
