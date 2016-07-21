import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {

  constructor() { }

  getCatalog() {
      return {
          0: {name: 'Source 0'},
          1: {name: 'Source 1'},
      }
  }

}
