import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseWithEggDetailsComponent } from './rise-with-egg-details.component';

describe('RiseWithEggDetailsComponent', () => {
  let component: RiseWithEggDetailsComponent;
  let fixture: ComponentFixture<RiseWithEggDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiseWithEggDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiseWithEggDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
