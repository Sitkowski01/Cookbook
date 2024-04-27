import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YakisobaComponent } from './yakisoba.component';

describe('YakisobaComponent', () => {
  let component: YakisobaComponent;
  let fixture: ComponentFixture<YakisobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YakisobaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YakisobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
