import { Component } from '@angular/core';

@Component({
  selector: 'app-insalata-caprese',
  templateUrl: './insalata-caprese.component.html',
  styleUrl: './insalata-caprese.component.css'
})
export class InsalataCapreseComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'With-tomatoes...', link: '/caprese-with-tomatoes-and-mozzarella-details' },
    { name: 'Avocado', link: '/avocado-caprese-details' },
    { name: 'Sun-dried', link: '/sun-dried-caprese-details' },
    { name: 'Roasted-pepper', link: '/roasted-pepper-caprese-details' },
    { name: 'Arugula', link: '/arugula-caprese-details' },
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
    return `../assets/images/meals-kolacje/caprese/${mealName}.png`;
  }
}
