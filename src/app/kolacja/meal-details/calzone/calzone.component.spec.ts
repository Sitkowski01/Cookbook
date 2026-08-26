import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzoneComponent } from './calzone.component';

describe('CalzoneComponent', () => {
  let component: CalzoneComponent;
  let fixture: ComponentFixture<CalzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalzoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
