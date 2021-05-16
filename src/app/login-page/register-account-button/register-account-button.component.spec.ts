import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountButtonComponent } from './register-account-button.component';

describe('RegisterAccountButtonComponent', () => {
  let component: RegisterAccountButtonComponent;
  let fixture: ComponentFixture<RegisterAccountButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAccountButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
