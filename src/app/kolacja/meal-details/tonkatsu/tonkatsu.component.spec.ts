import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonkatsuComponent } from './tonkatsu.component';

describe('TonkatsuComponent', () => {
  let component: TonkatsuComponent;
  let fixture: ComponentFixture<TonkatsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TonkatsuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonkatsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
