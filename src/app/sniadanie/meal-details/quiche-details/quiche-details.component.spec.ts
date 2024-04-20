import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicheDetailsComponent } from './quiche-details.component';

describe('QuicheDetailsComponent', () => {
  let component: QuicheDetailsComponent;
  let fixture: ComponentFixture<QuicheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuicheDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuicheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
