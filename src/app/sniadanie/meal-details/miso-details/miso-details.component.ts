import { Component } from '@angular/core';

@Component({
  selector: 'app-miso-details',
  templateUrl: './miso-details.component.html',
  styleUrl: './miso-details.component.css'
})
export class MisoDetailsComponent {
  selectedIndex: number = 0;

  meals: { name: string, link: string}[] = [
    { name: 'With-tofu-and...', link: '/with-tofu-and-wakame-details' },
    { name: 'With-mushroom', link: '/with-mushroom-details' },
    { name: 'With-vegetables', link: '/with-vegetables-details' },
    { name: 'With-clams', link: '/with-clams-details' },
    { name: 'Spicy', link: '/spicy-details' },
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
    return `../assets/images/meals-sniadania/miso/${mealName}.png`;
  }
}
