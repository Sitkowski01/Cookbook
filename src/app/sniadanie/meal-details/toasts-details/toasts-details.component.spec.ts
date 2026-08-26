import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsDetailsComponent } from './toasts-details.component';

describe('ToastsDetailsComponent', () => {
  let component: ToastsDetailsComponent;
  let fixture: ComponentFixture<ToastsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
