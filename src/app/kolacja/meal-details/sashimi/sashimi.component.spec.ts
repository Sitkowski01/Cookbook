import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashimiComponent } from './sashimi.component';

describe('SashimiComponent', () => {
  let component: SashimiComponent;
  let fixture: ComponentFixture<SashimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SashimiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SashimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
