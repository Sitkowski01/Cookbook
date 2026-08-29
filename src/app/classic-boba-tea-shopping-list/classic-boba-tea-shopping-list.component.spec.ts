import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicBobaTeaShoppingListComponent } from './classic-boba-tea-shopping-list.component';

describe('ClassicBobaTeaShoppingListComponent', () => {
  let component: ClassicBobaTeaShoppingListComponent;
  let fixture: ComponentFixture<ClassicBobaTeaShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicBobaTeaShoppingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicBobaTeaShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
