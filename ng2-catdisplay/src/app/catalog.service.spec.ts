/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CatalogService } from './catalog.service';

describe('Service: Catalog', () => {
  beforeEach(() => {
    addProviders([CatalogService]);
  });

  it('should ...',
    inject([CatalogService],
      (service: CatalogService) => {
        expect(service).toBeTruthy();
      }));
});
