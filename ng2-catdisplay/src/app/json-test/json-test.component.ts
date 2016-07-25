import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { TestPipe } from './json-test.pipe';

import {HTTP_BINDINGS} from '@angular/http';
import {TestService} from './json-test.service';


@Component({
	selector: 'app-json-test',
	template: `
	<h1>This is the JsonTestComponent</h1>
	<ul *ngIf="beatles">
  	<li *ngFor='#bandMember of beatles | values:"key":true'>
  	  <dl>
  	    <dt>Name:</dt>
        <dd>{{bandMember.name}}</dd>
        <dt>Description:</dt>
        <dd>{{bandMember.description}}</dd>
        <dt>Deceased:</dt>
        <dd>{{bandMember.deceased}}</dd>
        <dt>Object Key:</dt>
        <dd>{{bandMember.key}}</dd>
      </dl>
  	</li>
	</ul>
	`,
  // templateUrl: 'json-test.component.html',
	pipes: [TestPipe],
	directives: [NgFor, NgIf],
	providers: [HTTP_BINDINGS, TestService]
})
// export class JsonTestComponent {
//   public beatles: Object;
// 	// public sources;
//   constructor() {}
//
//   ngOnInit() {
//     setTimeout(() => {
//       this.beatles = {
//         john: {
//           name: 'John Lennon',
//           description: 'Imagining all the people',
//           deceased: true
//         },
//         paul: {
//           name: 'Paul McCartney',
//           description: 'Believes in Yesterday',
//           deceased: false
//         },
//         george: {
//           name: 'George Harrison',
//           description: 'His guitar gently weeps',
//           deceased: true
//         },
//         ringo: {
//           name: 'Ringo Starr',
//           description: 'Going to put him in the movies',
//           deceased: false
//         }
//       }
//     }, 500);
//   }
//
// }

export class JsonTestComponent {
  public beatles: Object;
	// public sources;
  constructor(testService: TestService) {
		testService.beatles
			.subscribe(
				beatles => this.beatles = beatles,
				error => console.error('Error'),
				() => console.log('Completed!')
			);
	}


}
