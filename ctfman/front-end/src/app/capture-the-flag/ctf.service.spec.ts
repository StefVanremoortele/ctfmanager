import { TestBed } from '@angular/core/testing';

import { CtfService } from './ctf.service';

describe('CtfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CtfService = TestBed.get(CtfService);
    expect(service).toBeTruthy();
  });
});
