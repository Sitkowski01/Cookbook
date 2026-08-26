import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkonomiyakiDetailsComponent } from './okonomiyaki-details.component';

describe('OkonomiyakiDetailsComponent', () => {
  let component: OkonomiyakiDetailsComponent;
  let fixture: ComponentFixture<OkonomiyakiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OkonomiyakiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OkonomiyakiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
