import { Component } from '@angular/core';

@Component({
  selector: 'app-kolacja',
  templateUrl: './kolacja.component.html',
  styleUrl: './kolacja.component.css'
})
export class KolacjaComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string, link: string }[] = [
    { name: "Goulash", cuisine: "American", link: "/goulash-details" },
    { name: "Grilled-chicken", cuisine: "American", link: "/grilled-chicken-details" },
    { name: "Pasta", cuisine: "American", link: "/pasta-details" },
    { name: "Sashimi", cuisine: "Japanese", link: "/sashimi-details" },
    { name: "Yakisoba", cuisine: "Japanese", link: "/yakisoba-details" },
    { name: "Tonkatsu", cuisine: "Japanese", link: "/tonkatsu-details" },
    { name: "Udon", cuisine: "Japanese", link: "/udon-details" },
    { name: "Tagliatelle", cuisine: "Italian", link: "/tagliatelle-details" },
    { name: "Osso-buco", cuisine: "Italian", link: "/osso-buco-details" },
    { name: "Calzone", cuisine: "Italian", link: "/calzone-details" },
    { name: "Caprese", cuisine: "Italian", link: "/caprese-details" },
    { name: "Grilled-bream", cuisine: "Mediterranean", link: "/grilled-bream-details" },
    { name: "Paella", cuisine: "Mediterranean", link: "/paella-details" },
    { name: "Tandoori", cuisine: "Asian", link: "/tandoori-details" },
    { name: "Pho", cuisine: "Asian", link: "/pho-details" },
    { name: "Curry", cuisine: "Asian", link: "/curry-details" },
    { name: "Confit-de-canard", cuisine: "Continental", link: "/confit-de-canard-details" },
    { name: "Cod-fillet", cuisine: "Continental", link: "/cod-fillet-details" },
    { name: "Ravioli", cuisine: "Continental", link: "/ravioli-details" },
    { name: "Potato-cakes", cuisine: "Regional", link: "/potato-cakes-details" },
    { name: "Vegetable-salad", cuisine: "Regional", link: "/vegetable-salad-details" },
    { name: "Kashotto", cuisine: "Regional", link: "/kashotto-details" },
    { name: "Sweet-crepes", cuisine: "Regional", link: "/sweet-crepes-details" }
]
;


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
    return `../assets/images/kolacje/${mealName}.png`;
  }
}
