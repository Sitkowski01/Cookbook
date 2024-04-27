import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssoBucoComponent } from './osso-buco.component';

describe('OssoBucoComponent', () => {
  let component: OssoBucoComponent;
  let fixture: ComponentFixture<OssoBucoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OssoBucoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OssoBucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
