import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaTeaDetailsComponent } from './boba-tea-details.component';

describe('BobaTeaDetailsComponent', () => {
  let component: BobaTeaDetailsComponent;
  let fixture: ComponentFixture<BobaTeaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobaTeaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BobaTeaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
