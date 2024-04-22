import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocacciaDetailsComponent } from './focaccia-details.component';

describe('FocacciaDetailsComponent', () => {
  let component: FocacciaDetailsComponent;
  let fixture: ComponentFixture<FocacciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocacciaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocacciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
