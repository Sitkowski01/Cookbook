import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatatouilleDetailsComponent } from './ratatouille-details.component';

describe('RatatouilleDetailsComponent', () => {
  let component: RatatouilleDetailsComponent;
  let fixture: ComponentFixture<RatatouilleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatatouilleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatatouilleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
