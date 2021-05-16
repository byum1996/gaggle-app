import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnButtonComponent } from './sign-on-button.component';

describe('SignOnButtonComponent', () => {
  let component: SignOnButtonComponent;
  let fixture: ComponentFixture<SignOnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOnButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
