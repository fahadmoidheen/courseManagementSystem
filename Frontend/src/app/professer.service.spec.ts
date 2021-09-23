import { TestBed } from '@angular/core/testing';

import { ProfesserService } from './professer.service';

describe('ProfesserService', () => {
  let service: ProfesserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
