import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkCutletDetailsComponent } from './pork-cutlet-details.component';

describe('PorkCutletDetailsComponent', () => {
  let component: PorkCutletDetailsComponent;
  let fixture: ComponentFixture<PorkCutletDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorkCutletDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorkCutletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
