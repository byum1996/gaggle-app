import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberCheckBoxComponent } from './remember-check-box.component';

describe('RememberCheckBoxComponent', () => {
  let component: RememberCheckBoxComponent;
  let fixture: ComponentFixture<RememberCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberCheckBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
