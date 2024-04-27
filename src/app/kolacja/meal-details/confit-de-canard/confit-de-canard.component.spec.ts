import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfitDeCanardComponent } from './confit-de-canard.component';

describe('ConfitDeCanardComponent', () => {
  let component: ConfitDeCanardComponent;
  let fixture: ComponentFixture<ConfitDeCanardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfitDeCanardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfitDeCanardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
