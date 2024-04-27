import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandooriComponent } from './tandoori.component';

describe('TandooriComponent', () => {
  let component: TandooriComponent;
  let fixture: ComponentFixture<TandooriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TandooriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TandooriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
