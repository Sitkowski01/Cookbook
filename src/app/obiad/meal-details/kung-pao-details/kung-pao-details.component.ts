import { Component } from '@angular/core';

@Component({
  selector: 'app-kung-pao-details',
  templateUrl: './kung-pao-details.component.html',
  styleUrl: './kung-pao-details.component.css'
})
export class KungPaoDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Chicken', link: '/chicken-kung-pao-details' },
    { name: 'Shrimp', link: '/shrimp-kung-pao-details' },
    { name: 'Tofu', link: '/tofu-kung-pao-details' },
    { name: 'Beef', link: '/beef-kung-pao-details' },
    { name: 'Pork', link: '/pork-kung-pao-details' },
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
    return `../assets/images/meals-obiady/kung-pao/${mealName}.png`;
  }
}
