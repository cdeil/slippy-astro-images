import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http} from '@angular/http';


class TestCatalog {
  private data;

  constructor(data) {

    this.data = data
  }

  /*getSource(idx) {
    return
  }*/
}


@Injectable()
export class CatalogService {
  /*public cat1;
  public cat2;

  public data;*/

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

  getAllData() {
    return Observable.forkJoin(
      this.http.get('/data/cat/test.json')
        .map(response => response.json()),

      this.http.get('/data/cat/test2.json')
        .map(response => response.json()),

      this.http.get('/data/cat/test3.json')
        .map(response => response.json())

    );
  }

}
