import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadTilesViewComponent } from './thread-tiles-view.component';

describe('ThreadTilesViewComponent', () => {
  let component: ThreadTilesViewComponent;
  let fixture: ComponentFixture<ThreadTilesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadTilesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadTilesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
