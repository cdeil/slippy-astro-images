import { Injectable } from '@angular/core';
import { CATALOG } from '../data/catalog';

@Injectable()
export class CatalogService {

  getCatalog() {
    return CATALOG;
  }

  constructor() { }

}
