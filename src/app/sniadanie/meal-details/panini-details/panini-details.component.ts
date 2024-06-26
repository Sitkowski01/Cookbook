import { Component } from '@angular/core';

@Component({
  selector: 'app-panini-details',
  templateUrl: './panini-details.component.html',
  styleUrl: './panini-details.component.css'
})
export class PaniniDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Caprese', link: '/caprese-details' },
    { name: 'Turkey', link: '/turkey-details' },
    { name: 'Chicken-pesto', link: '/chicken-pesto-details' },
    { name: 'Veggie', link: '/veggie-details' },
    { name: 'Italian', link: '/italian-details' },
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
    return `../assets/images/meals-sniadania/panini/${mealName}.png`;
  }
}
