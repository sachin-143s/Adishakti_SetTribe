import { TestBed } from '@angular/core/testing';

import { AstrologerService } from './astrologer.service';

describe('AstrologerService', () => {
  let service: AstrologerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstrologerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
