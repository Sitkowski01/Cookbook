import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniniDetailsComponent } from './panini-details.component';

describe('PaniniDetailsComponent', () => {
  let component: PaniniDetailsComponent;
  let fixture: ComponentFixture<PaniniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaniniDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaniniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
