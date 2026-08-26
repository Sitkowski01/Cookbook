import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichesDetailsComponent } from './sandwiches-details.component';

describe('SandwichesDetailsComponent', () => {
  let component: SandwichesDetailsComponent;
  let fixture: ComponentFixture<SandwichesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandwichesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandwichesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
