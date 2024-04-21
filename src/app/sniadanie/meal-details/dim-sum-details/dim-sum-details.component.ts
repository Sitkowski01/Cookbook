import { Component } from '@angular/core';

@Component({
  selector: 'app-dim-sum-details',
  templateUrl: './dim-sum-details.component.html',
  styleUrl: './dim-sum-details.component.css'
})
export class DimSumDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Shumai', link: '/shumai-details' },
    { name: 'Har-gow', link: '/har-gow-details' },
    { name: 'Char-siu-bao', link: '/char-siu-bao-details' },
    { name: 'Cheung-fun', link: '/cheung-fun-details' },
    { name: 'Turnip-cake', link: '/turnip-cake-details' },
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
    return `../assets/images/dim-sum/${mealName}.png`;
  }
}
