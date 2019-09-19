import { TestBed } from '@angular/core/testing';

import { ServiciofirestoneService } from './serviciofirestone.service';

describe('ServiciofirestoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciofirestoneService = TestBed.get(ServiciofirestoneService);
    expect(service).toBeTruthy();
  });
});
