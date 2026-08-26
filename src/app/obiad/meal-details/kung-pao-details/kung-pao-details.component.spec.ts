import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KungPaoDetailsComponent } from './kung-pao-details.component';

describe('KungPaoDetailsComponent', () => {
  let component: KungPaoDetailsComponent;
  let fixture: ComponentFixture<KungPaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KungPaoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KungPaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
