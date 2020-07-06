import { TestBed } from '@angular/core/testing';

import { ComicssvcService } from './comicssvc.service';

describe('ComicssvcService', () => {
  let service: ComicssvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicssvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
