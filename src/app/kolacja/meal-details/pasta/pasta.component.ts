import { Component } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Fusilli-with...', link: '/fusilli-with-pesto-details' },
    { name: 'Spaghetti...', link: '/spaghetti-bolognese-details' },
    { name: 'Penne...', link: '/penne-arabbiata-details' },
    { name: 'Tagliatelle...', link: '/tagliatelle-carbonara-details' },
    { name: 'Seafood...', link: '/seafood-linguine-details' },
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
    return `../assets/images/meals-kolacje/pasta/${mealName}.png`;
  }
}
