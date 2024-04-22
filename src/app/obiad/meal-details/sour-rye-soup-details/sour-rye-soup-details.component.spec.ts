import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourRyeSoupDetailsComponent } from './sour-rye-soup-details.component';

describe('SourRyeSoupDetailsComponent', () => {
  let component: SourRyeSoupDetailsComponent;
  let fixture: ComponentFixture<SourRyeSoupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourRyeSoupDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourRyeSoupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
