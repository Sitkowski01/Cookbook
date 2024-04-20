import { Component } from '@angular/core';

@Component({
  selector: 'app-omelette-details',
  templateUrl: './omelette-details.component.html',
  styleUrl: './omelette-details.component.css'
})
export class OmeletteDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Frittata', link: '/frittata-details' },
    { name: 'Eggs-benedict', link: '/eggs-benedict-details' },
    { name: 'Spanish', link: '/spanish-details' },
    { name: 'Mushroom', link: '/mushroom-details' },
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
    return `../assets/images/omelette/${mealName}.png`;
  }
}