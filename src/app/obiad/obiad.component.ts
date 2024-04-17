import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-obiad',
  templateUrl: './obiad.component.html',
  styleUrl: './obiad.component.css'
})
export class ObiadComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string }[] = [
    { name: 'Beetroot-soup', cuisine: 'Regional' },
    { name: 'Hunters-stew', cuisine: 'Regional' },
    { name: 'Cabbage-rolls', cuisine: 'Regional' },
    { name: 'Mushroom-soup', cuisine: 'Regional' },
    { name: 'Dumplings', cuisine: 'Regional' },
    { name: 'Silesian-noodles', cuisine: 'Regional' },
    { name: 'Pork-cutlet', cuisine: 'Regional' },
    { name: 'Sour-rye-soup', cuisine: 'Regional' },
    { name: 'Cheeseburger', cuisine: 'American' },
    { name: 'Pork-ribbs', cuisine: 'American' },
    { name: 'Ramen', cuisine: 'Japanese' },
    { name: 'Donburi', cuisine: 'Japanese' },
    { name: 'Pizza', cuisine: 'Italian' },
    { name: 'Risotto', cuisine: 'Italian' },
    { name: 'Spaghetti', cuisine: 'Italian' },
    { name: 'Greek-salad', cuisine: 'Mediteranan' },
    { name: 'Trout', cuisine: 'Mediteranan' },
    { name: 'Focaccia', cuisine: 'Mediteranan' },
    { name: 'Kung-pao', cuisine: 'Asian' },
    { name: 'Pad-thai', cuisine: 'Asian' },
    { name: 'Sushi', cuisine: 'Asian' },
    { name: 'Ratatouille', cuisine: 'Continental' },
    { name: 'Lasagne', cuisine: 'Continental' },
    { name: 'Paella', cuisine: 'Continental' },
    { name: 'Coq-au-vin', cuisine: 'Continental' },
  ];

  isDarkMode: boolean = false;
  searchQuery: string = '';
  filteredMeals: { name: string, cuisine: string }[] = this.meals;
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
      this.searchItems(); // Dodane wywołanie metody searchItems()
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

  filterByCuisine(cuisine: string) {
    if (cuisine === 'All') {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter(meal => meal.cuisine === cuisine);
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  getBackgroundImageUrl(mealName: string): string {
    return `../assets/images/obiady/${mealName}.png`;
  }
}
