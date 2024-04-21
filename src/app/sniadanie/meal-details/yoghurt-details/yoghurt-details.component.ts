import { Component } from '@angular/core';

@Component({
  selector: 'app-yoghurt-details',
  templateUrl: './yoghurt-details.component.html',
  styleUrl: './yoghurt-details.component.css'
})
export class YoghurtDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Greek', link: '/greek-details' },
    { name: 'Priobiotic', link: '/priobiotic-details' },
    { name: 'Plant-based', link: '/plant-based-details' },
    { name: 'Low-fat', link: '/low-fat-details' },
    { name: 'Fruit-flavored', link: '/fruit-flavored-details' },
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
    return `../assets/images/yogurt/${mealName}.png`;
  }
}
