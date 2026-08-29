import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classic-boba-tea-shopping-list',
  templateUrl: './classic-boba-tea-shopping-list.component.html',
  styleUrls: ['./classic-boba-tea-shopping-list.component.css']
})
export class ClassicBobaTeaShoppingListComponent implements OnInit {
  isBrightMode: boolean = false;
  ingredients: { name: string, checked: boolean }[] = [];
  items: string[] = ['Classic-boba-tea', 'Gołąbki', 'Żurek', 'Barszcz czerwony'];
  selectedIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const state = history.state;
    if (state && state.doughIngredients && state.fillingIngredients && state.servingIngredients) {
      const doughIngredients = state.doughIngredients;
      const fillingIngredients = state.fillingIngredients;
      const servingIngredients = state.servingIngredients;

      this.ingredients = [
        ...doughIngredients.map((name: string) => ({ name, checked: false })),
        ...fillingIngredients.map((name: string) => ({ name, checked: false })),
        ...servingIngredients.map((name: string) => ({ name, checked: false }))
    ];
    } else {
      console.error('Invalid ingredients data');
    }
  }

  toggleTheme() {
    this.isBrightMode = !this.isBrightMode;
  }

  goBack(): void {
    this.router.navigate(['/boba-tea-details']);
  }

  getBackgroundImageUrl(): string {
    return '../assets/images/meals-sniadania/boba-tea/boba-tea-recipe/boba-tea-classic.png';
  }

  updateCheckedStatus(index: number): void {
    this.ingredients[index].checked = !this.ingredients[index].checked;
  }
  isActive(index: number): boolean {
    return index === this.selectedIndex;
  }


  selectItem(index: number) {
    this.selectedIndex = index;
  }
}
