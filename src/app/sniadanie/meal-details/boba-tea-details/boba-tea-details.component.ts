import { Component } from '@angular/core';

@Component({
  selector: 'app-boba-tea-details',
  templateUrl: './boba-tea-details.component.html',
  styleUrl: './boba-tea-details.component.css'
})
export class BobaTeaDetailsComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string, link: string}[] = [
    { name: 'Shakshouka', cuisine: 'Asian', link: '/shakshouka-details' },
    { name: 'Omelette', cuisine: 'American', link: '/omelette-details' },
    { name: 'Eggs', cuisine: 'Regional', link: '/eggs-details' },
    { name: 'Crepes', cuisine: 'Regional', link: '/crepes-details' },
    { name: 'Pancakes', cuisine: 'American', link: '/pancakes-details' },
    { name: 'Panini', cuisine: 'Italian', link: '/panini-details' },
    { name: 'Sandwiches', cuisine: 'Regional', link: '/sandwiches-details' },
    { name: 'Scrambled-eggs', cuisine: 'Regional', link: '/scrambled-eggs-details' },
    { name: 'Rise-with-egg', cuisine: 'Japanese', link: '/rise-with-egg-details' },
    { name: 'Toasts', cuisine: 'American', link: '/toasts-details' },
    { name: 'Miso', cuisine: 'Japanese', link: '/miso-details' },
    { name: 'Okonomiyaki', cuisine: 'Japanese', link: '/okonomiyaki-details' },
    { name: 'Croissant', cuisine: 'Italian', link: '/croissant-details' },
    { name: 'Bread-with-oil', cuisine: 'Mediteranan', link: '/bread-with-oil-details' },
    { name: 'Yoghurt', cuisine: 'Mediteranan', link: '/yoghurt-details' },
    { name: 'Dim-sum', cuisine: 'Asian', link: '/dim-sum-details' },
    { name: 'Wonton', cuisine: 'Asian', link: '/wonton-details' },
    { name: 'Boba-tea', cuisine: 'Asian', link: '/boba-tea-details' },
    { name: 'Shrimps', cuisine: 'Asian', link: '/shrimps-details' },
    { name: 'Bruschetta', cuisine: 'Italian', link: '/bruschetta-details' },
    { name: 'Quiche', cuisine: 'Continental', link: '/quiche-details' },
    { name: 'Muesli', cuisine: 'Continental', link: '/muesli-details' },
    { name: 'Oatmeal', cuisine: 'Continental', link: '/oatmeal-details' },
];

  isBrightMode: boolean = false;
  searchQuery: string = '';
  filteredMeals: { name: string, cuisine: string, link: string }[] = this.meals;
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
    this.isBrightMode = !this.isBrightMode;
  }

  getBackgroundImageUrl(mealName: string): string {
    return `../assets/images/sniadania/${mealName}.png`;
  }
}
