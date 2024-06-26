import { Component } from '@angular/core';

@Component({
  selector: 'app-cabbage-rolls-details',
  templateUrl: './cabbage-rolls-details.component.html',
  styleUrl: './cabbage-rolls-details.component.css'
})
export class CabbageRollsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Polish-gołąbki', link: '/polish-gołąbki-details' },
    { name: 'Ukrainian...', link: '/ukrainian-holubtsi-details' },
    { name: 'Turkish-lahana...', link: '/turkish-lahana-sarma-details' },
    { name: 'Romanian...', link: '/romanian-sarmale-details' },
    { name: 'Middle-eastern...', link: '/middle-eastern-mahshi-malfouf-details' },
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
    return `../assets/images/meals-obiady/cabbage-rolls/${mealName}.png`;
  }
}
