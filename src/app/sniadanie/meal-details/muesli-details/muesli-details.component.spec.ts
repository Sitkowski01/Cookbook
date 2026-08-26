import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuesliDetailsComponent } from './muesli-details.component';

describe('MuesliDetailsComponent', () => {
  let component: MuesliDetailsComponent;
  let fixture: ComponentFixture<MuesliDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuesliDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuesliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
