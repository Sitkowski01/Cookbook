import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambledEggsDetailsComponent } from './scrambled-eggs-details.component';

describe('ScrambledEggsDetailsComponent', () => {
  let component: ScrambledEggsDetailsComponent;
  let fixture: ComponentFixture<ScrambledEggsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrambledEggsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrambledEggsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
