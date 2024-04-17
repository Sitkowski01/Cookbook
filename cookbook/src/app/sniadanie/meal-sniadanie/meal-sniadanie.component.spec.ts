import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSniadanieComponent } from './meal-sniadanie.component';

describe('MealSniadanieComponent', () => {
  let component: MealSniadanieComponent;
  let fixture: ComponentFixture<MealSniadanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealSniadanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealSniadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
