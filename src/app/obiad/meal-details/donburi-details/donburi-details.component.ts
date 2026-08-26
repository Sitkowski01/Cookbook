import { Component } from '@angular/core';

@Component({
  selector: 'app-donburi-details',
  templateUrl: './donburi-details.component.html',
  styleUrl: './donburi-details.component.css'
})
export class DonburiDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Katsu-don', link: '/katsu-don-details' },
    { name: 'Oyako-don', link: '/oyako-don-details' },
    { name: 'Gyudon', link: '/gyudon-details' },
    { name: 'Tekka-don', link: '/tekka-don-details' },
    { name: 'Unagi-don', link: '/unagi-don-details' },
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
    return `../assets/images/meals-obiady/donburi/${mealName}.png`;
  }
}
