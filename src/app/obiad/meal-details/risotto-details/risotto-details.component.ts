import { Component } from '@angular/core';

@Component({
  selector: 'app-risotto-details',
  templateUrl: './risotto-details.component.html',
  styleUrl: './risotto-details.component.css'
})
export class RisottoDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Alla-milanese', link: '/rissoto-alla-milanese-details' },
    { name: 'Ai-funghi', link: '/rissoto-ai-funghi-details' },
    { name: 'Al-frutti-di...', link: '/rissoto-al-frutti-di-mare-details' },
    { name: 'Ai-frutti-di...', link: '/rissoto-ai-frutti-di-bosco-details' },
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
    return `../assets/images/meals-obiady/risotto/${mealName}.png`;
  }
}
