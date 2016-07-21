import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {

  constructor() { }

  getCatalog() {
    return [
      { id: 0, name: 'Source 0' },
      { id: 1, name: 'Source 1' }
    ]
  }
}
