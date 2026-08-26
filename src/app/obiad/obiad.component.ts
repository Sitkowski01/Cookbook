import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-obiad',
  templateUrl: './obiad.component.html',
  styleUrl: './obiad.component.css'
})
export class ObiadComponent {
  selectedIndex: number = 0;
  items: string[] = ['All','Continental', 'Regional', 'American', 'Japanese','Italian','Mediteranan','Asian'];
  meals: { name: string, cuisine: string, link: string }[] = [
    { name: 'Beetroot-soup', cuisine: 'Regional', link: '/beetroot-soup-details' },
    { name: 'Hunters-stew', cuisine: 'Regional', link: '/hunters-stew-details' },
    { name: 'Cabbage-rolls', cuisine: 'Regional', link: '/cabbage-rolls-details' },
    { name: 'Mushroom-soup', cuisine: 'Regional', link: '/mushroom-soup-details' },
    { name: 'Dumplings', cuisine: 'Regional', link: '/dumplings-details' },
    { name: 'Silesian-noodles', cuisine: 'Regional', link: '/silesian-noodles-details' },
    { name: 'Pork-cutlet', cuisine: 'Regional', link: '/pork-cutlet-details' },
    { name: 'Sour-rye-soup', cuisine: 'Regional', link: '/sour-rye-soup-details' },
    { name: 'Cheeseburger', cuisine: 'American', link: '/cheeseburger-details' },
    { name: 'Pork-ribbs', cuisine: 'American', link: '/pork-ribbs-details' },
    { name: 'Ramen', cuisine: 'Japanese', link: '/ramen-details' },
    { name: 'Donburi', cuisine: 'Japanese', link: '/donburi-details' },
    { name: 'Pizza', cuisine: 'Italian', link: '/pizza-details' },
    { name: 'Risotto', cuisine: 'Italian', link: '/risotto-details' },
    { name: 'Spaghetti', cuisine: 'Italian', link: '/spaghetti-details' },
    { name: 'Greek-salad', cuisine: 'Mediteranan', link: '/greek-salad-details' },
    { name: 'Trout', cuisine: 'Mediteranan', link: '/trout-details' },
    { name: 'Focaccia', cuisine: 'Mediteranan', link: '/focaccia-details' },
    { name: 'Kung-pao', cuisine: 'Asian', link: '/kung-pao-details' },
    { name: 'Pad-thai', cuisine: 'Asian', link: '/pad-thai-details' },
    { name: 'Sushi', cuisine: 'Asian', link: '/sushi-details' },
    { name: 'Ratatouille', cuisine: 'Continental', link: '/ratatouille-details' },
    { name: 'Lasagne', cuisine: 'Continental', link: '/lasagne-details' },
    { name: 'Paella', cuisine: 'Continental', link: '/paella-details' },
    { name: 'Coq-au-vin', cuisine: 'Continental', link: '/coq-au-vin-details' },
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
    this.isBrightMode = !this.isBrightMode;
  }

  getBackgroundImageUrl(mealName: string): string {
    return `../assets/images/obiady/${mealName}.png`;
  }
}
