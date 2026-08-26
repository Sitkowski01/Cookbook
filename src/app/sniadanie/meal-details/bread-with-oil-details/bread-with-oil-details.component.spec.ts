import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadWithOilDetailsComponent } from './bread-with-oil-details.component';

describe('BreadWithOilDetailsComponent', () => {
  let component: BreadWithOilDetailsComponent;
  let fixture: ComponentFixture<BreadWithOilDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadWithOilDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadWithOilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
