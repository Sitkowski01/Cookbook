import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolacjaComponent } from './kolacja.component';

describe('KolacjaComponent', () => {
  let component: KolacjaComponent;
  let fixture: ComponentFixture<KolacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolacjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KolacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
