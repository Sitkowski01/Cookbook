import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpsDetailsComponent } from './shrimps-details.component';

describe('ShrimpsDetailsComponent', () => {
  let component: ShrimpsDetailsComponent;
  let fixture: ComponentFixture<ShrimpsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShrimpsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShrimpsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
