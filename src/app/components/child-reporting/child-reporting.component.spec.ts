import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReportingComponent } from './child-reporting.component';

describe('ChildReportingComponent', () => {
  let component: ChildReportingComponent;
  let fixture: ComponentFixture<ChildReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
