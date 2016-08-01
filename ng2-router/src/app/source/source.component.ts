import { Component, OnInit, OnDestroy } from '@angular/core';
import { Source } from '../data/source';
import { CatalogService } from '../data/catalog.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ParamsService} from '../params.service';

@Component({
  moduleId: module.id,
  selector: 'app-source',
  templateUrl: 'source.component.html',
  styleUrls: ['source.component.css'],
  providers: [CatalogService]
  // We are not listing ParamsService as a provider because we defined it in app.component.ts
  // and in this component, we want to use the SAME instance of it (so data can be shared across components)
})

export class SourceComponent implements OnInit, OnDestroy {

  // public sources: Source[];
  public catalog;
  source: Source;
  private sub: any;
  public id;

  getCatalog() {
    this.catalogService.getData().subscribe(
      data => {
        this.catalog = data;
      },
      err => console.error(err),
      () => console.log('working!')
    );

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
    public paramsService: ParamsService
  ) {}

  ngOnInit() {

    this.getCatalog();

    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.id = id;
      this.paramsService.setSourceParam(this.id);
      console.log(this.id)
      // this.catalogService.getSource(id).then(source => this.source = source);
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
