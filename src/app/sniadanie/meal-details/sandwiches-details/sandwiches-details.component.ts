import { Component } from '@angular/core';

@Component({
  selector: 'app-sandwiches-details',
  templateUrl: './sandwiches-details.component.html',
  styleUrl: './sandwiches-details.component.css'
})
export class SandwichesDetailsComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, link: string}[] = [
    { name: 'Club', link: '/club-details' },
    { name: 'BLT', link: '/blt-details' },
    { name: 'Grilled-cheese', link: '/grilled-cheese-details' },
    { name: 'Reuben', link: '/reuben-details' },
    { name: 'Philly-cheese...', link: '/philly-chesesteak-details' },
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
    return `../assets/images/sandwiches/${mealName}.png`;
  }
}
