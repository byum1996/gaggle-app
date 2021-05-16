import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTypeStatusComponent } from './date-type-status.component';

describe('DateTypeStatusComponent', () => {
  let component: DateTypeStatusComponent;
  let fixture: ComponentFixture<DateTypeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTypeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTypeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
