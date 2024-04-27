import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodFilletComponent } from './cod-fillet.component';

describe('CodFilletComponent', () => {
  let component: CodFilletComponent;
  let fixture: ComponentFixture<CodFilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodFilletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodFilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
