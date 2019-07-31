import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelContentCourseComponent } from './left-panel-content-course.component';

describe('LeftPanelContentCourseComponent', () => {
  let component: LeftPanelContentCourseComponent;
  let fixture: ComponentFixture<LeftPanelContentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelContentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelContentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
