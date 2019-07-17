import { TestBed } from '@angular/core/testing';

import { ForumUserService } from './forum-user.service';

describe('ForumUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumUserService = TestBed.get(ForumUserService);
    expect(service).toBeTruthy();
  });
});
