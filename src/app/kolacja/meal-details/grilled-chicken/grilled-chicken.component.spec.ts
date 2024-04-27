import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilledChickenComponent } from './grilled-chicken.component';

describe('GrilledChickenComponent', () => {
  let component: GrilledChickenComponent;
  let fixture: ComponentFixture<GrilledChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrilledChickenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrilledChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
