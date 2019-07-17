import { TestBed } from '@angular/core/testing';

import { ForumUserRoleService } from './forum-user-role.service';

describe('ForumUserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumUserRoleService = TestBed.get(ForumUserRoleService);
    expect(service).toBeTruthy();
  });
});
