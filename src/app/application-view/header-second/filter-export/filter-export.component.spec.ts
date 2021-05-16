import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExportComponent } from './filter-export.component';

describe('FilterExportComponent', () => {
  let component: FilterExportComponent;
  let fixture: ComponentFixture<FilterExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
