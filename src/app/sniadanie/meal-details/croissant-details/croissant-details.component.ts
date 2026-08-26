import { Component } from '@angular/core';

@Component({
  selector: 'app-croissant-details',
  templateUrl: './croissant-details.component.html',
  styleUrl: './croissant-details.component.css'
})
export class CroissantDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic-butter', link: '/classic-butter-details' },
    { name: 'Almond', link: '/almond-details' },
    { name: 'Chocolate', link: '/chocolate-details' },
    { name: 'Ham-and-cheese', link: '/ham-and-cheese-details' },
    { name: 'Fruit-filled', link: '/fruit-filled-details' },
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
    return `../assets/images/meals-sniadania/croissant/${mealName}.png`;
  }
}
