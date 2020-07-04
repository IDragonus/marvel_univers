import { TestBed } from '@angular/core/testing';

import { CharactersvcService } from './charactersvc.service';

describe('CharactersvcService', () => {
  let service: CharactersvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
