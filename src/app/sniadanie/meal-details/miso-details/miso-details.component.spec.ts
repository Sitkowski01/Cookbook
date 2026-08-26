import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisoDetailsComponent } from './miso-details.component';

describe('MisoDetailsComponent', () => {
  let component: MisoDetailsComponent;
  let fixture: ComponentFixture<MisoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
