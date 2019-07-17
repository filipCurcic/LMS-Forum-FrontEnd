import { TestBed } from '@angular/core/testing';

import { FacultySubForumService } from './faculty-sub-forum.service';

describe('FacultySubForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultySubForumService = TestBed.get(FacultySubForumService);
    expect(service).toBeTruthy();
  });
});
