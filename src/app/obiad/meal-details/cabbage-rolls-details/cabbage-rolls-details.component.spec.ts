import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabbageRollsDetailsComponent } from './cabbage-rolls-details.component';

describe('CabbageRollsDetailsComponent', () => {
  let component: CabbageRollsDetailsComponent;
  let fixture: ComponentFixture<CabbageRollsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabbageRollsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabbageRollsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
