import { TestBed } from '@angular/core/testing';

import { ParamsRechercheService } from './params-recherche.service';

describe('ParamsRechercheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamsRechercheService = TestBed.get(ParamsRechercheService);
    expect(service).toBeTruthy();
  });
});
