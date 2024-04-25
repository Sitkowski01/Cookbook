import { Component } from '@angular/core';

@Component({
  selector: 'app-cheeseburger-details',
  templateUrl: './cheeseburger-details.component.html',
  styleUrl: './cheeseburger-details.component.css'
})
export class CheeseburgerDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-cheesburger-details' },
    { name: 'Bacon', link: '/bacon-cheesburger-details' },
    { name: 'Mushroom-swiss', link: '/mushroom-swiss-cheesburger-details' },
    { name: 'BBQ', link: '/bbq-cheesburger-details' },
    { name: 'Jalapeno-pepper', link: '/jalapeno-pepper-cheesburger-details' },
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
    return `../assets/images/meals-obiady/cheeseburger/${mealName}.png`;
  }
}
