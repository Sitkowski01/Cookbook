import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseburgerDetailsComponent } from './cheeseburger-details.component';

describe('CheeseburgerDetailsComponent', () => {
  let component: CheeseburgerDetailsComponent;
  let fixture: ComponentFixture<CheeseburgerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheeseburgerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheeseburgerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
