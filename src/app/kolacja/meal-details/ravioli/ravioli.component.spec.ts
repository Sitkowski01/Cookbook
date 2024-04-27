import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavioliComponent } from './ravioli.component';

describe('RavioliComponent', () => {
  let component: RavioliComponent;
  let fixture: ComponentFixture<RavioliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RavioliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RavioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
