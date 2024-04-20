import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoghurtDetailsComponent } from './yoghurt-details.component';

describe('YoghurtDetailsComponent', () => {
  let component: YoghurtDetailsComponent;
  let fixture: ComponentFixture<YoghurtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoghurtDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoghurtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
