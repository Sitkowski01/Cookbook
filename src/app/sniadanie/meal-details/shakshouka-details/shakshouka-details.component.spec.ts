import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakshoukaDetailsComponent } from './shakshouka-details.component';

describe('ShakshoukaDetailsComponent', () => {
  let component: ShakshoukaDetailsComponent;
  let fixture: ComponentFixture<ShakshoukaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShakshoukaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShakshoukaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
