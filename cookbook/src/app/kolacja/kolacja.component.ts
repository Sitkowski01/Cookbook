import { Component } from '@angular/core';

@Component({
  selector: 'app-kolacja',
  templateUrl: './kolacja.component.html',
  styleUrl: './kolacja.component.css'
})
export class KolacjaComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string }[] = [
    { name: 'Goulash', cuisine: 'American' },
    { name: 'Grilled-chicken', cuisine: 'American' },
    { name: 'Pasta', cuisine: 'American' },
    { name: 'Sashimi', cuisine: 'Japanese' },
    { name: 'Yakisoba', cuisine: 'Japanese' },
    { name: 'Tonkatsu', cuisine: 'Japanese' },
    { name: 'Udon', cuisine: 'Japanese' },
    { name: 'Tagliatelle', cuisine: 'Italian' },
    { name: 'Osso-buco', cuisine: 'Italian' },
    { name: 'Calzone', cuisine: 'Italian' },
    { name: 'Insalata-caprese', cuisine: 'Italian' },
    { name: 'Grilled-bream', cuisine: 'Mediteranan' },
    { name: 'Paella', cuisine: 'Mediteranan' },
    { name: 'Tandoori', cuisine: 'Asian' },
    { name: 'Pho', cuisine: 'Asian' },
    { name: 'Curry', cuisine: 'Asian' },
    { name: 'Confit-de-canard', cuisine: 'Continental' },
    { name: 'Cod-fillet', cuisine: 'Continental' },
    { name: 'Ravioli', cuisine: 'Continental' },
    { name: 'Potato-cakes', cuisine: 'Regional' },
    { name: 'Vegetable-salad', cuisine: 'Regional' },
    { name: 'Kashotto', cuisine: 'Regional' },
    { name: 'Sweet-crepes', cuisine: 'Regional' },
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
    return `../assets/images/kolacje/${mealName}.png`;
  }
}
