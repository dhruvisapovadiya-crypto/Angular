import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mearging } from './mearging';

describe('Mearging', () => {
  let component: Mearging;
  let fixture: ComponentFixture<Mearging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mearging],
    }).compileComponents();

    fixture = TestBed.createComponent(Mearging);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
