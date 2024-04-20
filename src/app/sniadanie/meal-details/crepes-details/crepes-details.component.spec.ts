import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepesDetailsComponent } from './crepes-details.component';

describe('CrepesDetailsComponent', () => {
  let component: CrepesDetailsComponent;
  let fixture: ComponentFixture<CrepesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrepesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrepesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
