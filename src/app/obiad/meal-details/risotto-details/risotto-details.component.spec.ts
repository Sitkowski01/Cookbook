import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisottoDetailsComponent } from './risotto-details.component';

describe('RisottoDetailsComponent', () => {
  let component: RisottoDetailsComponent;
  let fixture: ComponentFixture<RisottoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RisottoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RisottoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
