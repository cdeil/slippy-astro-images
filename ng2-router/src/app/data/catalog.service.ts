import { Injectable } from '@angular/core';
import { CATALOG } from '../data/catalog';

import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';

import {Source} from './source';

// class ReformattedCatalog {
//   private data;
//
//   reformat(obj) {
//     var res = [];
//
//     Object.keys(obj).forEach(k => {
//       Object.keys(obj[k]).forEach(v => {
//         (res[v] = (res[v] || { id: v }))[k] = obj[k][v];
//       });
//     });
//
//     return res;
//   }
//
//   constructor(json) {
//     this.data = json;
//     this.reformat(json);
//   }
//
// }


let sourcesPromise = Promise.resolve(CATALOG);

@Injectable()
export class CatalogService {

  // private unformattedData;
  // public sourcesPromise;

  getCatalog() {
    // return this.sourcesPromise;
    return sourcesPromise;
  }

  getCATALOG() {
    return CATALOG;
  }

  getSource(id: number | string) {
    // return this.sourcesPromise
    return sourcesPromise
      .then(sources => sources.find(source => source.id === +id));
  }



  reformat(obj) {
    var arr: Source[] = [];

    Object.keys(obj).forEach(k => {
      Object.keys(obj[k]).forEach(v => {
        // Short way:   (arr[v] = (arr[v] || { id: v }))[k] = obj[k][v];

        if (!arr[v]) {
          arr[v] = { id: v };
        }
        arr[v][k] = obj[k][v];

      });
    });

    console.log("arr: ", arr);
    return arr;

  }


  getData() { // Once this is working, change name to getCatalog or getCATALOG

    return this.http.get('app/data/cat_2fhl.json')
      // .map((res:Response) => this.reformat(res.json()));
      .map((res: Response) => this.reformat(res.json()));

  }



  constructor(private http: Http) {

  }

}
