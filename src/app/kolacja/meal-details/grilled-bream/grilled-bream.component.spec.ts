import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilledBreamComponent } from './grilled-bream.component';

describe('GrilledBreamComponent', () => {
  let component: GrilledBreamComponent;
  let fixture: ComponentFixture<GrilledBreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrilledBreamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrilledBreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
