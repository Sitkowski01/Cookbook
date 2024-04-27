import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoCakesComponent } from './potato-cakes.component';

describe('PotatoCakesComponent', () => {
  let component: PotatoCakesComponent;
  let fixture: ComponentFixture<PotatoCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotatoCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PotatoCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
