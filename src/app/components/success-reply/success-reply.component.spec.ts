import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessReplyComponent } from './success-reply.component';

describe('SuccessReplyComponent', () => {
  let component: SuccessReplyComponent;
  let fixture: ComponentFixture<SuccessReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
