import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroutDetailsComponent } from './trout-details.component';

describe('TroutDetailsComponent', () => {
  let component: TroutDetailsComponent;
  let fixture: ComponentFixture<TroutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroutDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TroutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
