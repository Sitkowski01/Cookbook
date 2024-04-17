import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealKolacjaComponent } from './meal-kolacja.component';

describe('MealKolacjaComponent', () => {
  let component: MealKolacjaComponent;
  let fixture: ComponentFixture<MealKolacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealKolacjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealKolacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
