import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sniadanie',
  templateUrl: './sniadanie.component.html',
  styleUrls: ['./sniadanie.component.css']
})
export class SniadanieComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string }[] = [
    { name: 'Shakshouka', cuisine: 'Asian' },
    { name: 'Omelette', cuisine: 'American' },
    { name: 'Eggs', cuisine: 'Regional' },
    { name: 'Crepes', cuisine: 'Regional' },
    { name: 'Pancakes', cuisine: 'American' },
    { name: 'Panini', cuisine: 'Italian' },
    { name: 'Sandwiches', cuisine: 'Regional' },
    { name: 'Scrambled-eggs', cuisine: 'Regional' },
    { name: 'Rise-with-egg', cuisine: 'Japanese' },
    { name: 'Toasts', cuisine: 'American' },
    { name: 'Miso', cuisine: 'Japanese' },
    { name: 'Okonomiyaki', cuisine: 'Japanese' },
    { name: 'Croissant', cuisine: 'Italian' },
    { name: 'Bread-with-oil', cuisine: 'Mediteranan' },
    { name: 'Yoghurt', cuisine: 'Mediteranan' },
    { name: 'Dim-sum', cuisine: 'Asian' },
    { name: 'Wonton', cuisine: 'Asian' },
    { name: 'Boba-tea', cuisine: 'Asian' },
    { name: 'Shrimps', cuisine: 'Asian' },
    { name: 'Bruschetta', cuisine: 'Italian' },
    { name: 'Quiche', cuisine: 'Continental' },
    { name: 'Muesli', cuisine: 'Continental' },
    { name: 'Oatmeal', cuisine: 'Continental' },
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
    return `../assets/images/sniadania/${mealName}.png`;
  }
}
