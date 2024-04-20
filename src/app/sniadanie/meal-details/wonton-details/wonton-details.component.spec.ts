import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WontonDetailsComponent } from './wonton-details.component';

describe('WontonDetailsComponent', () => {
  let component: WontonDetailsComponent;
  let fixture: ComponentFixture<WontonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WontonDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WontonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
