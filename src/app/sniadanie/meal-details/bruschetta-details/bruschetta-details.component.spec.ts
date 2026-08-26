import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruschettaDetailsComponent } from './bruschetta-details.component';

describe('BruschettaDetailsComponent', () => {
  let component: BruschettaDetailsComponent;
  let fixture: ComponentFixture<BruschettaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BruschettaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BruschettaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
