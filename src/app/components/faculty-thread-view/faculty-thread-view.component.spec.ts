import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyThreadViewComponent } from './faculty-thread-view.component';

describe('FacultyThreadViewComponent', () => {
  let component: FacultyThreadViewComponent;
  let fixture: ComponentFixture<FacultyThreadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyThreadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyThreadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
