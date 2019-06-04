import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadListViewComponent } from './thread-list-view.component';

describe('ThreadListViewComponent', () => {
  let component: ThreadListViewComponent;
  let fixture: ComponentFixture<ThreadListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
