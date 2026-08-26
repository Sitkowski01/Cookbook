import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonburiDetailsComponent } from './donburi-details.component';

describe('DonburiDetailsComponent', () => {
  let component: DonburiDetailsComponent;
  let fixture: ComponentFixture<DonburiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonburiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonburiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
