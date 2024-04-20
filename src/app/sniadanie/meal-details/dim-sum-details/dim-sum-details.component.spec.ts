import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimSumDetailsComponent } from './dim-sum-details.component';

describe('DimSumDetailsComponent', () => {
  let component: DimSumDetailsComponent;
  let fixture: ComponentFixture<DimSumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DimSumDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DimSumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
