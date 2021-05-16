import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleLogoComponent } from './gaggle-logo.component';

describe('GaggleLogoComponent', () => {
  let component: GaggleLogoComponent;
  let fixture: ComponentFixture<GaggleLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaggleLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
