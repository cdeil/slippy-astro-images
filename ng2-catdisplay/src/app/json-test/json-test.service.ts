import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TestService {
  public beatles;

  constructor(http: Http) {
    this.beatles = http.get('/data/cat/test.json')
      .map(response => response.json());
  }
}
