import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObiadComponent } from './obiad.component';

describe('ObiadComponent', () => {
  let component: ObiadComponent;
  let fixture: ComponentFixture<ObiadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObiadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
