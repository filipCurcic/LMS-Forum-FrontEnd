import { TestBed } from '@angular/core/testing';

import { ForumRoleService } from './forum-role.service';

describe('ForumRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumRoleService = TestBed.get(ForumRoleService);
    expect(service).toBeTruthy();
  });
});
