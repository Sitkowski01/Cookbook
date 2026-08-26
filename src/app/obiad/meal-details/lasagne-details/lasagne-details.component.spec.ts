import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasagneDetailsComponent } from './lasagne-details.component';

describe('LasagneDetailsComponent', () => {
  let component: LasagneDetailsComponent;
  let fixture: ComponentFixture<LasagneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LasagneDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LasagneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
