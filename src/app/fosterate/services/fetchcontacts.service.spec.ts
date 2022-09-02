import { TestBed } from '@angular/core/testing';

import { FetchcontactsService } from './fetchcontacts.service';

describe('FetchcontactsService', () => {
  let service: FetchcontactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchcontactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
