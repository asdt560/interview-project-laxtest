import { TestBed } from '@angular/core/testing';

import { FoiaService } from './foia.service';

describe('FoiaService', () => {
  let service: FoiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
