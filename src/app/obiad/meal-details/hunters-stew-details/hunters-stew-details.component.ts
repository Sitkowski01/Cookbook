import { Component } from '@angular/core';

@Component({
  selector: 'app-hunters-stew-details',
  templateUrl: './hunters-stew-details.component.html',
  styleUrl: './hunters-stew-details.component.css'
})
export class HuntersStewDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Polish-bigos', link: '/polish-bigos-details' },
    { name: 'German-jäger...', link: '/german-jäger-eintopf-details' },
    { name: 'Hungarian...', link: '/hungarian-gulyás-details' },
    { name: 'Russian...', link: '/russian-solyanka-details' },
    { name: 'French-cassoulet', link: '/french-cassoulet-details' },
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
    return `../assets/images/meals-obiady/hunters-stew/${mealName}.png`;
  }
}
