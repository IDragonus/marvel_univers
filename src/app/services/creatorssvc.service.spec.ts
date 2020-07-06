import { TestBed } from '@angular/core/testing';

import { CreatorssvcService } from './creatorssvc.service';

describe('CreatorssvcService', () => {
  let service: CreatorssvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorssvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
