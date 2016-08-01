import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { TestPipe } from './json-test.pipe';

import {HTTP_BINDINGS} from '@angular/http';
import {CatalogService} from './catalog.service';


@Component({
  selector: 'app-json-test',
  template: `
	<h1>This is the JsonTestComponent</h1>
	<select *ngIf="cat1">
  	<option *ngFor='let source of cat1.asArray()' value="{{source.name}}" >
  	  {{source.name}}
  	</option>
	</select>

	<select *ngIf="cat2">
		<option *ngFor='let source of cat2 | values:"key":true' value="{{source.name}}" >
			{{source.name}}
		</option>
	</select>

	<select *ngIf="cat3">
		<option *ngFor='let source of cat3 | values:"key":true' value="{{source.name}}" >
			{{source.name}}
		</option>
	</select>

  <select *ngIf="cat2fhl">
    <option *ngFor='let source of cat2fhl | values:"key":true' value="{{source}}" >
      {{source["0"]}}
    </option>
  </select>
	`,
  // templateUrl: 'json-test.component.html',
  pipes: [TestPipe],
  directives: [NgFor, NgIf],
  providers: [HTTP_BINDINGS, CatalogService]
})


export class JsonTestComponent implements OnInit {
  public cat1: Object;
  public cat2: Object;
	public cat3: Object;

  public cat2fhl: Object;


  constructor(private catalogService: CatalogService) {

		/*this.data = catalogService.data;

		catalogService.cat1
			.subscribe(
				cat1 => this.cat1 = cat1,
				error => console.error('Error cat1'),
				() => console.log('Completed cat1!')
			);



		catalogService.cat2
			.subscribe(
					cat2 => this.cat2 = cat2,
				error => console.error('Error cat2'),
				() => console.log('Completed cat2!')
			);*/
  }

  ngOnInit() {
		this.getAllData();
    this.getData();
	}

  getAllData() {
    this.catalogService.getAllData().subscribe(
      data => {
        this.cat1 = data[0]
        this.cat2 = data[1]
				this.cat3 = data[2]

      }
    );
  }

  getData() {
    this.catalogService.getData().subscribe(
      data => {this.cat2fhl = data},
      err => console.error(err),
      () => console.log("working!")
    );
  }


}
