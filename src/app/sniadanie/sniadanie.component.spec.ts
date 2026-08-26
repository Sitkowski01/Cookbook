import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniadanieComponent } from './sniadanie.component';

describe('SniadanieComponent', () => {
  let component: SniadanieComponent;
  let fixture: ComponentFixture<SniadanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SniadanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SniadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
