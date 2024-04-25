import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrl: './pizza-details.component.css'
})
export class PizzaDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Margherita', link: '/pizza-margherita-details' },
    { name: 'BBQ-chicken', link: '/bbq-chicken-pizza-details' },
    { name: 'Hawaiian', link: '/hawaiian-pizza-details' },
    { name: 'Margherita...', link: '/pizza-margherita-con-bufala-details' },
    { name: 'Neapolitan', link: '/neapolitan-pizza-details' },
    { name: 'Pepperoni', link: '/pizza-pepperoni-details' },
    { name: 'Quattro-stagioni', link: '/quattro-satgioni-pizza-details' },
    { name: 'Supreme', link: '/supreme-pizza-details' },
    { name: 'White-pizza', link: '/white-pizza-details' },
    { name: 'Chicago-deep...', link: '/chicago-deep-dish-details' },
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
    return `../assets/images/meals-obiady/pizza/${mealName}.png`;
  }
}
