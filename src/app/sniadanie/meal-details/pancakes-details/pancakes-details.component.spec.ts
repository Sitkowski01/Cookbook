import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakesDetailsComponent } from './pancakes-details.component';

describe('PancakesDetailsComponent', () => {
  let component: PancakesDetailsComponent;
  let fixture: ComponentFixture<PancakesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PancakesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PancakesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
