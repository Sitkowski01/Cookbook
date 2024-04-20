import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeletteDetailsComponent } from './omelette-details.component';

describe('OmeletteDetailsComponent', () => {
  let component: OmeletteDetailsComponent;
  let fixture: ComponentFixture<OmeletteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmeletteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmeletteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
