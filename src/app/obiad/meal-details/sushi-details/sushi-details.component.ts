import { Component } from '@angular/core';

@Component({
  selector: 'app-sushi-details',
  templateUrl: './sushi-details.component.html',
  styleUrl: './sushi-details.component.css'
})
export class SushiDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Nigiri', link: '/nigiri-sushi-details' },
    { name: 'Maki', link: '/maki-sushi-details' },
    { name: 'Temaki', link: '/temaki-sushi-details' },
    { name: 'Chirashi', link: '/chirashi-sushi-details' },
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
    return `../assets/images/meals-obiady/sushi/${mealName}.png`;
  }
}
