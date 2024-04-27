import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoulashComponent } from './goulash.component';

describe('GoulashComponent', () => {
  let component: GoulashComponent;
  let fixture: ComponentFixture<GoulashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoulashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoulashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
