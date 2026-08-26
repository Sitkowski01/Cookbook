import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenDetailsComponent } from './ramen-details.component';

describe('RamenDetailsComponent', () => {
  let component: RamenDetailsComponent;
  let fixture: ComponentFixture<RamenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RamenDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
