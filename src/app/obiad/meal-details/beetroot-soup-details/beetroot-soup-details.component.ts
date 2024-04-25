import { Component } from '@angular/core';

@Component({
  selector: 'app-beetroot-soup-details',
  templateUrl: './beetroot-soup-details.component.html',
  styleUrl: './beetroot-soup-details.component.css'
})
export class BeetrootSoupDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Classic-borscht', link: '/classic-borscht-details' },
    { name: 'Ukrainian...', link: '/ukrainian-borscht-details' },
    { name: 'Polish-barszcz', link: '/polish-barszcz-details' },
    { name: 'Lithuanian...', link: '/lithuanian-saltibarščiai-details' },
    { name: 'Russian...', link: '/russian-svekolnik-details' },
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
    return `../assets/images/meals-obiady/beetroot-soup/${mealName}.png`;
  }
}
