import { Component } from '@angular/core';

@Component({
  selector: 'app-osso-buco',
  templateUrl: './osso-buco.component.html',
  styleUrl: './osso-buco.component.css'
})
export class OssoBucoComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'With-vegetables', link: '/osso-buco-with-vegetables-details' },
    { name: 'With-potatoes', link: '/osso-buco-with-potatoes-details' },
    { name: 'With-rice', link: '/osso-buco-with-rice-details' },
    { name: 'With-buckwheat', link: '/osso-buco-with-buckwheat-details' },
    { name: 'With-mashed...', link: '/osso-buco-with-mashed-potatoes-details' },
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
    return `../assets/images/meals-kolacje/osso-buco/${mealName}.png`;
  }
}
