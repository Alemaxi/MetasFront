import { TestBed } from '@angular/core/testing';

import { IMasterPageService } from './master-page.service';

describe('IMasterPageService', () => {
  let service: IMasterPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMasterPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
