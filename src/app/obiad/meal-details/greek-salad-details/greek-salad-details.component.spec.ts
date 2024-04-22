import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekSaladDetailsComponent } from './greek-salad-details.component';

describe('GreekSaladDetailsComponent', () => {
  let component: GreekSaladDetailsComponent;
  let fixture: ComponentFixture<GreekSaladDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreekSaladDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreekSaladDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
