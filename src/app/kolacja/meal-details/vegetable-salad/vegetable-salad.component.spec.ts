import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableSaladComponent } from './vegetable-salad.component';

describe('VegetableSaladComponent', () => {
  let component: VegetableSaladComponent;
  let fixture: ComponentFixture<VegetableSaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetableSaladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetableSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
