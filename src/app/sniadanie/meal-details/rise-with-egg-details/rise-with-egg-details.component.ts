import { Component } from '@angular/core';

@Component({
  selector: 'app-rise-with-egg-details',
  templateUrl: './rise-with-egg-details.component.html',
  styleUrl: './rise-with-egg-details.component.css'
})
export class RiseWithEggDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Tamago-gohan', link: '/tamago-gohan-details' },
    { name: 'Oyakodon', link: '/oyakodon-details' },
    { name: 'Omurice', link: '/omurice-details' },
    { name: 'Fried-rice', link: '/fried-rice-details' },
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
    return `../assets/images/rise-with-egg/${mealName}.png`;
  }
}
