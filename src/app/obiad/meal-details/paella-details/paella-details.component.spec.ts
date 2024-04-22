import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaellaDetailsComponent } from './paella-details.component';

describe('PaellaDetailsComponent', () => {
  let component: PaellaDetailsComponent;
  let fixture: ComponentFixture<PaellaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaellaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaellaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
