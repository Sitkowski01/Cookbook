import { Component } from '@angular/core';

@Component({
  selector: 'app-shakshouka-details',
  templateUrl: './shakshouka-details.component.html',
  styleUrl: './shakshouka-details.component.css'
})
export class ShakshoukaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Spinach-and-feta', link: '/spinach-and-feta-details' },
    { name: 'Zucchini-and...', link: '/zucchini-and-eggplant-details' },
    { name: 'Chorizo', link: '/chorizo-details' },
    { name: 'Bell-pepper-and...', link: '/bell-pepper-and-chickpea-details' }, // Chickpea
    { name: 'Mushroom-and...', link: '/mushroom-and-olive-details' },
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
    return `../assets/images/shakshouka/${mealName}.png`;
  }
}
