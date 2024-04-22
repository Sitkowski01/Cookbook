import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntersStewDetailsComponent } from './hunters-stew-details.component';

describe('HuntersStewDetailsComponent', () => {
  let component: HuntersStewDetailsComponent;
  let fixture: ComponentFixture<HuntersStewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HuntersStewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuntersStewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
