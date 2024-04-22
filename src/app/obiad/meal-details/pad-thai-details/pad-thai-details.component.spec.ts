import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadThaiDetailsComponent } from './pad-thai-details.component';

describe('PadThaiDetailsComponent', () => {
  let component: PadThaiDetailsComponent;
  let fixture: ComponentFixture<PadThaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadThaiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadThaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
