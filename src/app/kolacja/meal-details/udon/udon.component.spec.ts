import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdonComponent } from './udon.component';

describe('UdonComponent', () => {
  let component: UdonComponent;
  let fixture: ComponentFixture<UdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
