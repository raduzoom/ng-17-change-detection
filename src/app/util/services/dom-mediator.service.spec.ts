import { TestBed } from '@angular/core/testing';

import { DomMediatorService } from './dom-mediator.service';

describe('DomMediatorService', () => {
  let service: DomMediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomMediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
