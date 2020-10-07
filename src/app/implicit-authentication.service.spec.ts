import { TestBed } from '@angular/core/testing';

import { ImplicitAuthenticationService } from './implicit-authentication.service';

describe('ImplicitAuthenticationService', () => {
  let service: ImplicitAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImplicitAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
