import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsalataCapreseComponent } from './insalata-caprese.component';

describe('InsalataCapreseComponent', () => {
  let component: InsalataCapreseComponent;
  let fixture: ComponentFixture<InsalataCapreseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsalataCapreseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsalataCapreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
