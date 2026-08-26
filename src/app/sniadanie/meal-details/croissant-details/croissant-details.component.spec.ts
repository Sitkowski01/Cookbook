import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissantDetailsComponent } from './croissant-details.component';

describe('CroissantDetailsComponent', () => {
  let component: CroissantDetailsComponent;
  let fixture: ComponentFixture<CroissantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CroissantDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CroissantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
