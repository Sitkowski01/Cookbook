import { Component } from '@angular/core';

@Component({
  selector: 'app-bread-with-oil-details',
  templateUrl: './bread-with-oil-details.component.html',
  styleUrl: './bread-with-oil-details.component.css'
})
export class BreadWithOilDetailsComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, link: string}[] = [
    { name: 'Ciabatta-with-oil', link: '/ciabatta-with-oil-details' },
    { name: 'Baguette-with-oil', link: '/baguette-with-oil-details' },
    { name: 'Greek-olive-bread', link: '/greek-olive-bread-details' },
    { name: 'Herb-and-garlic', link: '/herb-and-garlic-details' },
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
    return `../assets/images/meals-sniadania/bread-with-oil/${mealName}.png`;
  }
}
