import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http, Response} from '@angular/http';


class TestCatalog {
  private data;

  constructor(json) {
    // can reformat json to data format we like here
    this.data = json;
    console.log(json);
    /*this.swap(data);*/
  }
  // can add methods that present data in different ways
  // to make components and templates simple
  asArray() {
    var res = [];
    for(var key in this.data) {
      res.push({label: key, name: this.data.key});
    }
    /*return [{name: 'aaa'}, {name: 'bbb'}]*/
    console.log(res);
    return res;
  }

  /*swap(json) {
    /*var new_data = {};
    for (var key in json) {
      new_data[json[key]] = key;
    }
    return new_data;

    }*/

}


@Injectable()
export class CatalogService {
  /*public cat1;
  public cat2;

  public data;*/

  /*public formatted_data: TestCatalog = new TestCatalog();*/

  constructor(private http: Http) {
    /*this.cat1 = http.get('/data/cat/test.json')
      .map(response => response.json());

    this.cat2 = http.get('/data/cat/test2.json')
      .map(response => response.json());*/

    /*this.data = {
      'cat1': this.cat1,
      'cat2': this.cat2
    }*/

  }

  reformat(obj) {
    var res;

    Object.keys(obj).forEach(k => {
      Object.keys(obj[k]).forEach(v => {
        (res[v] = (res[v] || { id: v }))[k] = obj[k][v];
      });
    });

    return res;
  }

  getData() { // Once this is working, change name to getCatalog or getCATALOG

    return this.http.get('/data/cat/cat_2fhl.json')
      .map((res: Response) => res.json());

  }

  getAllData() {
    return Observable.forkJoin(
      this.http.get('/data/cat/test.json')
        .map(response => new TestCatalog(response.json())),
        /*.map(response => response.json()),*/

      this.http.get('/data/cat/test2.json')
        .map(response => response.json()),

      this.http.get('/data/cat/test3.json')
        .map(response => response.json())

    );
  }

}
