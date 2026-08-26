import { Component } from '@angular/core';

@Component({
  selector: 'app-kashotto',
  templateUrl: './kashotto.component.html',
  styleUrl: './kashotto.component.css'
})
export class KashottoComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Mushroom', link: '/mushroom-kashotto-details' },
    { name: 'Pumpkin-and...', link: '/pumpkin-and-sage-kashotto-details' },
    { name: 'Spinach-and...', link: '/spinach-and-feta-kashotto-details' },
    { name: 'Butternut...', link: '/butternut-squash-and-walnut-kashotto-details' },
    { name: 'Asparagus...', link: '/asparagus-and-lemon-kashotto-details' },
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
    return `../assets/images/meals-kolacje/kashotto/${mealName}.png`;
  }
}
