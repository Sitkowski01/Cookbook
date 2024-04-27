import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KashottoComponent } from './kashotto.component';

describe('KashottoComponent', () => {
  let component: KashottoComponent;
  let fixture: ComponentFixture<KashottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KashottoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KashottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
