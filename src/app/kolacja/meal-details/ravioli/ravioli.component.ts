import { Component } from '@angular/core';

@Component({
  selector: 'app-ravioli',
  templateUrl: './ravioli.component.html',
  styleUrl: './ravioli.component.css'
})
export class RavioliComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Cheese', link: '/cheese-ravioli-details' },
    { name: 'Spinach-and...', link: '/spinach-and-ricotta-ravioli-details' },
    { name: 'Mushroom', link: '/mushroom-ravioli-details' },
    { name: 'Lobster', link: '/lobster-ravioli-details' },
    { name: 'Butternut...', link: '/butternut-squash-ravioli-details' },
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
    return `../assets/images/meals-kolacje/ravioli/${mealName}.png`;
  }
}
