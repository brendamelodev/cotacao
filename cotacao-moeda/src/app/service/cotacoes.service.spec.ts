import { TestBed } from '@angular/core/testing';

import { CotacoesService } from './cotacoes.service';

describe('CotacoesService', () => {
  let service: CotacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
