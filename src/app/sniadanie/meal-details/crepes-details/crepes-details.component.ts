import { Component } from '@angular/core';

@Component({
  selector: 'app-crepes-details',
  templateUrl: './crepes-details.component.html',
  styleUrl: './crepes-details.component.css'
})
export class CrepesDetailsComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, link: string}[] = [
    { name: 'Suzette', link: '/suzette-details' },
    { name: 'Chocolate', link: '/chocolate-details' },
    { name: 'Savory', link: '/savory-details' },
    { name: 'Berry', link: '/berry-details' },
    { name: 'Banana-nutella', link: '/banana-nutella-details' },
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
    return `../assets/images/crepes/${mealName}.png`;
  }
}
