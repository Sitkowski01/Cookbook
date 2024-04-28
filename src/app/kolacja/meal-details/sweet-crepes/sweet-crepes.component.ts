import { Component } from '@angular/core';

@Component({
  selector: 'app-sweet-crepes',
  templateUrl: './sweet-crepes.component.html',
  styleUrl: './sweet-crepes.component.css'
})
export class SweetCrepesComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Nutella-and...', link: '/nutella-and-banana-crepes-details' },
    { name: 'Strawberry', link: '/strawberry-crepes-details' },
    { name: 'Lemon-and...', link: '/lemon-and-sugar-crepes-details' },
    { name: 'Blueberry-and...', link: '/blueberry-and-ricotta-crepes-details' },
    { name: 'Apple-cinamon', link: '/apple-cinamon-sweet-crepes-details' },
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
    return `../assets/images/meals-kolacje/sweet-crepes/${mealName}.png`;
  }
}
