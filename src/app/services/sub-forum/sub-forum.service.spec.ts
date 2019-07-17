import { TestBed } from '@angular/core/testing';

import { SubForumService } from './sub-forum.service';

describe('SubForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubForumService = TestBed.get(SubForumService);
    expect(service).toBeTruthy();
  });
});
