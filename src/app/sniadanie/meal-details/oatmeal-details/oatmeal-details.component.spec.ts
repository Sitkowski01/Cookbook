import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OatmealDetailsComponent } from './oatmeal-details.component';

describe('OatmealDetailsComponent', () => {
  let component: OatmealDetailsComponent;
  let fixture: ComponentFixture<OatmealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OatmealDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OatmealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
