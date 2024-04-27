import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetCrepesComponent } from './sweet-crepes.component';

describe('SweetCrepesComponent', () => {
  let component: SweetCrepesComponent;
  let fixture: ComponentFixture<SweetCrepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SweetCrepesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SweetCrepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
