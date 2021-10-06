import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RndNumComponent } from './rnd-num.component';

describe('RndNumComponent', () => {
  let component: RndNumComponent;
  let fixture: ComponentFixture<RndNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RndNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RndNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
