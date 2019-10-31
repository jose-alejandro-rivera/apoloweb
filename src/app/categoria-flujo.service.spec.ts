import { TestBed } from '@angular/core/testing';

import { CategoriaFlujoService } from './categoria-flujo.service';

describe('CategoriaFlujoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaFlujoService = TestBed.get(CategoriaFlujoService);
    expect(service).toBeTruthy();
  });
});
