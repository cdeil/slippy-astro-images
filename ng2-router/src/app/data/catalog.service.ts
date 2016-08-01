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
        (arr[v] = (arr[v] || { id: v }))[k] = obj[k][v];
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

    // this.unformattedData = {
    //   "name" :{
    //     "0":"2FHL J0008.1+4709",
    //     "1":"2FHL J0009.3+5031",
    //     "2":"2FHL J0018.5+2947",
    //     "3":"2FHL J0022.0+0006",
    //     "4":"2FHL J0033.6-1921"
    //   },
    //   "ra":{
    //     "0":2.0436999798,
    //     "1":2.3434998989,
    //     "2":4.6354999542,
    //     "3":5.5001001358,
    //     "4":8.4114999771
    //     },
    //     "dec":{
    //       "0":47.1641998291,
    //       "1":50.5217018127,
    //       "2":29.7879009247,
    //       "3":0.1058999971,
    //       "4":-19.3575000763
    //       }
    // };
    //
    // console.log(this.reformat(this.unformattedData));

    // this.sourcesPromise = Promise.resolve(this.getData());

  }

}
