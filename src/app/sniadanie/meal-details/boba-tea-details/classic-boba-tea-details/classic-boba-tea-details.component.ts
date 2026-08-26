import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classic-boba-tea-details',
  templateUrl: './classic-boba-tea-details.component.html',
  styleUrls: ['./classic-boba-tea-details.component.css']
})
export class ClassicBobaTeaDetailsComponent {
  isBrightMode: boolean = false;
  items: string[] = ['Ingredients', 'Method'];

  doughIngredients: string[] = [
    '2 tablespoons black tea',
    '1 cup boiling water',
    '2 tablespoons tapioca syrup',
    '1/4 cup milk',
    '2 tablespoons caramel syrup or other sweet syrups (optional)'
  ];
  
  fillingIngredients: string[] = [
    '1/2 cup tapioca pearls',
    '2 tablespoons brown sugar',
    '1 cup water'
  ];
  
  servingIngredients: string[] = [
    'Wide-bore straw',
    'Ice cubes (optional)'
  ];
  
  generalDescription: string[] = [
    'Classic Boba Tea is a popular Taiwanese tea-based drink known for its chewy tapioca pearls, also called boba, at the bottom of the cup. It typically consists of brewed tea, milk, sugar, and tapioca pearls.',
    ];


  tapiocaPreparationSteps: string[] = [
    'Boil tapioca pearls in water for about 15-20 minutes until soft.',
    'Add brown sugar and simmer for an additional 5 minutes.',
    'Drain and rinse the tapioca, then transfer to cold water.',
    'Place cooked tapioca at the bottom of the glass.',
    'Add tapioca syrup.'
  ];

  teaPreparationSteps: string[] = [
    'Steep black tea in boiling water for about 3-5 minutes.',
    'Let it cool down.',
    'Pour the steeped tea into the glass.',
    'Pour in milk and add sweet syrups, if you prefer a sweeter taste.',
    'Mix all ingredients.'
  ];
  constructor(private router: Router) { }

  toggleTheme() {
    this.isBrightMode = !this.isBrightMode;
  }

  goBack(): void {
    this.router.navigate(['/boba-tea-details']);
  }

  getBackgroundImageUrl(): string {
    return '../assets/images/meals-sniadania/boba-tea/boba-tea-recipe/boba-tea-classic.png';
  }

  selectedIndex: number = 0;

  selectItem(index: number) {
    this.selectedIndex = index;
  }

  isActive(index: number): boolean {
    return index === this.selectedIndex;
  }
}
