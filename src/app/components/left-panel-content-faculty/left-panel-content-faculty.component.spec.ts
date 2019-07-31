import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelContentFacultyComponent } from './left-panel-content-faculty.component';

describe('LeftPanelContentFacultyComponent', () => {
  let component: LeftPanelContentFacultyComponent;
  let fixture: ComponentFixture<LeftPanelContentFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelContentFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelContentFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
