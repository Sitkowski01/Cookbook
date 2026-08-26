import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoqAuVinDetailsComponent } from './coq-au-vin-details.component';

describe('CoqAuVinDetailsComponent', () => {
  let component: CoqAuVinDetailsComponent;
  let fixture: ComponentFixture<CoqAuVinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoqAuVinDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoqAuVinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
