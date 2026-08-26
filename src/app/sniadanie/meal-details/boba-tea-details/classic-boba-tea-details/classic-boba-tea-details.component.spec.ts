import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicBobaTeaDetailsComponent } from './classic-boba-tea-details.component';

describe('ClassicBobaTeaDetailsComponent', () => {
  let component: ClassicBobaTeaDetailsComponent;
  let fixture: ComponentFixture<ClassicBobaTeaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicBobaTeaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicBobaTeaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
