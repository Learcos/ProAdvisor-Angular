import { TestBed } from '@angular/core/testing';

import { ParamsCommentairesService } from './params-commentaires.service';

describe('ParamsCommentairesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamsCommentairesService = TestBed.get(ParamsCommentairesService);
    expect(service).toBeTruthy();
  });
});
