import { Injectable } from '@angular/core';
import { CATALOG } from '../data/catalog';


let sourcesPromise = Promise.resolve(CATALOG);

@Injectable()
export class CatalogService {

  getCatalog() {
    // return CATALOG;
    return sourcesPromise;
  }

  getSource(id: number | string) {
    return sourcesPromise
      .then(sources => sources.find(source => source.id === +id));
  }

  constructor() { }

}
