import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghettiDetailsComponent } from './spaghetti-details.component';

describe('SpaghettiDetailsComponent', () => {
  let component: SpaghettiDetailsComponent;
  let fixture: ComponentFixture<SpaghettiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaghettiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaghettiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
