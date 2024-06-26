import { Component } from '@angular/core';

@Component({
  selector: 'app-pork-cutlet-details',
  templateUrl: './pork-cutlet-details.component.html',
  styleUrl: './pork-cutlet-details.component.css'
})
export class PorkCutletDetailsComponent {
  selectedIndex: number = 0;
  meals: { name: string, link: string}[] = [
    { name: 'Tonkatsu', link: '/tonkatsu-details' },
    { name: 'Schnitzel', link: '/schnitzel-details' },
    { name: 'Milanesa', link: '/milanesa-details' },
    { name: 'Pork-katsu...', link: '/pork-katsu-curry-details' },
    { name: 'Cordon-bleu', link: '/cordon-bleu-details' },
    { name: 'Schabowy', link: '/schabowy-details' },
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
    return `../assets/images/meals-obiady/pork-cutlet/${mealName}.png`;
  }
}
