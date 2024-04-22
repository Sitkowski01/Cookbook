import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumplingsDetailsComponent } from './dumplings-details.component';

describe('DumplingsDetailsComponent', () => {
  let component: DumplingsDetailsComponent;
  let fixture: ComponentFixture<DumplingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumplingsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumplingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
