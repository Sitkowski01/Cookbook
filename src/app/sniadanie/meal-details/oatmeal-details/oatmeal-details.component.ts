import { Component } from '@angular/core';

@Component({
  selector: 'app-oatmeal-details',
  templateUrl: './oatmeal-details.component.html',
  styleUrl: './oatmeal-details.component.css'
})
export class OatmealDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-details' },
    { name: 'Apple-cinnamon', link: '/apple-cinnamon-details' },
    { name: 'Banana-nut', link: '/banana-nut-details' },
    { name: 'Berry-blast', link: '/berry-blast-details' },
    { name: 'Pumpkin-spice', link: '/pumpkin-spice-details' },
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
    return `../assets/images/oatmeal/${mealName}.png`;
  }
}
