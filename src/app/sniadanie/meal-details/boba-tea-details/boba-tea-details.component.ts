import { Component } from '@angular/core';

@Component({
  selector: 'app-boba-tea-details',
  templateUrl: './boba-tea-details.component.html',
  styleUrl: './boba-tea-details.component.css'
})
export class BobaTeaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-details' },
    { name: 'Fruit', link: '/fruit-details' },
    { name: 'Matcha', link: '/matcha-details' },
    { name: 'Taro', link: '/taro-details' },
    { name: 'Thai', link: '/thai-details' },
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
    return `../assets/images/boba-tea/${mealName}.png`;
  }
}
