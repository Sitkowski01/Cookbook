import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkRibbsDetailsComponent } from './pork-ribbs-details.component';

describe('PorkRibbsDetailsComponent', () => {
  let component: PorkRibbsDetailsComponent;
  let fixture: ComponentFixture<PorkRibbsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorkRibbsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorkRibbsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
