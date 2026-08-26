import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealObiadComponent } from './meal-obiad.component';

describe('MealObiadComponent', () => {
  let component: MealObiadComponent;
  let fixture: ComponentFixture<MealObiadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealObiadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealObiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
