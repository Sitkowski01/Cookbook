import { Component } from '@angular/core';

@Component({
  selector: 'app-quiche-details',
  templateUrl: './quiche-details.component.html',
  styleUrl: './quiche-details.component.css'
})
export class QuicheDetailsComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string, link: string}[] = [
    { name: 'Shakshouka', cuisine: 'Asian', link: '/shakshouka-details' },
    { name: 'Omelette', cuisine: 'American', link: '/omelette-details' },
    { name: 'Eggs', cuisine: 'Regional', link: '/eggs-details' },
    { name: 'Crepes', cuisine: 'Regional', link: '/crepes-details' },
    { name: 'Pancakes', cuisine: 'American', link: '/pancakes-details' },
];

  isBrightMode: boolean = false;
  searchQuery: string = '';
  filteredMeals: { name: string, cuisine: string, link: string }[] = this.meals;
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

  filterByCuisine(cuisine: string) {
    if (cuisine === 'All') {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter(meal => meal.cuisine === cuisine);
    }
  }

  toggleTheme() {
    this.isBrightMode = !this.isBrightMode;
  }

  getBackgroundImageUrl(mealName: string): string {
    return `../assets/images/sniadania/${mealName}.png`;
  }
}
