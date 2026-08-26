import { Component } from '@angular/core';

@Component({
  selector: 'app-grilled-chicken',
  templateUrl: './grilled-chicken.component.html',
  styleUrl: './grilled-chicken.component.css'
})
export class GrilledChickenComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'BBQ', link: '/bbq-grilled-chicken-details' },
    { name: 'Cajun', link: '/cajun-grilled-chicken-details' },
    { name: 'Lemon-and...', link: '/lemon-and-herbs-grilled-chicken-details' },
    { name: 'Mediterranean', link: '/nediterranean-grilled-chicken-details' },
    { name: 'Teriyaki', link: '/teriyaki-grilled-chicken-details' },
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
    return `../assets/images/meals-kolacje/grilled-chicken/${mealName}.png`;
  }
}
