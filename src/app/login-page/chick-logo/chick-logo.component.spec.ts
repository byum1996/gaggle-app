import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickLogoComponent } from './chick-logo.component';

describe('ChickLogoComponent', () => {
  let component: ChickLogoComponent;
  let fixture: ComponentFixture<ChickLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
