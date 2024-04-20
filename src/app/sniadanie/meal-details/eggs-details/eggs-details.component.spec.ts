import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsDetailsComponent } from './eggs-details.component';

describe('EggsDetailsComponent', () => {
  let component: EggsDetailsComponent;
  let fixture: ComponentFixture<EggsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EggsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EggsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
