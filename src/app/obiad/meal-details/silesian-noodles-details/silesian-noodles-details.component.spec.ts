import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilesianNoodlesDetailsComponent } from './silesian-noodles-details.component';

describe('SilesianNoodlesDetailsComponent', () => {
  let component: SilesianNoodlesDetailsComponent;
  let fixture: ComponentFixture<SilesianNoodlesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SilesianNoodlesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SilesianNoodlesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
