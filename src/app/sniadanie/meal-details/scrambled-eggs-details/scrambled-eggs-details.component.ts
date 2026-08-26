import { Component } from '@angular/core';

@Component({
  selector: 'app-scrambled-eggs-details',
  templateUrl: './scrambled-eggs-details.component.html',
  styleUrl: './scrambled-eggs-details.component.css'
})
export class ScrambledEggsDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic', link: '/classic-details' },
    { name: 'Creamy', link: '/creamy-details' },
    { name: 'Cheesy', link: '/cheesy-details' },
    { name: 'Herbed', link: '/herbed-details' },
    { name: 'Smoked-salmon', link: '/smoked-salmon-details' },
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
    return `../assets/images/meals-sniadania/scrambled-eggs/${mealName}.png`;
  }
}
