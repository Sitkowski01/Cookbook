import { Component } from '@angular/core';

@Component({
  selector: 'app-bruschetta-details',
  templateUrl: './bruschetta-details.component.html',
  styleUrl: './bruschetta-details.component.css'
})
export class BruschettaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Tomato-and...', link: '/tomato-and-basil-details' },
    { name: 'Mushroom-and...', link: '/Mushroom-and-goat-cheese-details' },
    { name: 'Fig-and...', link: '/fig-and-prosciutto-details' },
    { name: 'Avocado-and...', link: '/avocado-and-tomato-details' },
    { name: 'Peach-and...', link: '/peach-and-burrata-details' },
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
    return `../assets/images/bruschetta/${mealName}.png`;
  }
}
