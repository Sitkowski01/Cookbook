import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetrootSoupDetailsComponent } from './beetroot-soup-details.component';

describe('BeetrootSoupDetailsComponent', () => {
  let component: BeetrootSoupDetailsComponent;
  let fixture: ComponentFixture<BeetrootSoupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeetrootSoupDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeetrootSoupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
