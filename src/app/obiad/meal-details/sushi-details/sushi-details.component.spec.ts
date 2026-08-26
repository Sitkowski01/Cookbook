import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiDetailsComponent } from './sushi-details.component';

describe('SushiDetailsComponent', () => {
  let component: SushiDetailsComponent;
  let fixture: ComponentFixture<SushiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SushiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SushiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
