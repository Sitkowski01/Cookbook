import { Component } from '@angular/core';

@Component({
  selector: 'app-cod-fillet',
  templateUrl: './cod-fillet.component.html',
  styleUrl: './cod-fillet.component.css'
})
export class CodFilletComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Baked-with...', link: '/baked-cod-fllet-with-lemon-and-herbs-details' },
    { name: 'Pan-seared...', link: '/pan-seared-cod-fllet-with-tomato-sauce-details' },
    { name: 'Grilled-with...', link: '/grilled-cod-fllet-with-garlic-butter-details' },
    { name: 'Crispy-with...', link: '/crispy-cod-fllet-with-tartar-sauce-details' },
    { name: 'Steamed-with...', link: '/steamed-cod-fllet-with-ginger-and-soy-sauce-details' },
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
    return `../assets/images/meals-kolacje/cod-fillet/${mealName}.png`;
  }
}
