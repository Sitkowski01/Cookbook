import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomSoupDetailsComponent } from './mushroom-soup-details.component';

describe('MushroomSoupDetailsComponent', () => {
  let component: MushroomSoupDetailsComponent;
  let fixture: ComponentFixture<MushroomSoupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MushroomSoupDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MushroomSoupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
