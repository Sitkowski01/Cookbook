import { Component } from '@angular/core';

@Component({
  selector: 'app-ramen-details',
  templateUrl: './ramen-details.component.html',
  styleUrl: './ramen-details.component.css'
})
export class RamenDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Shoyu', link: '/shoyu-ramen-details' },
    { name: 'Tonkotsu', link: '/tonkotsu-ramen-details' },
    { name: 'Miso', link: '/miso-ramen-details' },
    { name: 'Shio', link: '/shio-ramen-details' },
    { name: 'Tantanmen', link: '/tantanmen-ramen-details' },
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
    return `../assets/images/meals-obiady/ramen/${mealName}.png`;
  }
}
