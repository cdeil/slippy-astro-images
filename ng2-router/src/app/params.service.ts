import { Injectable } from '@angular/core';

@Injectable()
export class ParamsService {
  private source_param;
  private view_param;
  private _cat;

  setSourceParam(selectedSource) {
    this.source_param = selectedSource;
  }

  setViewParam(selectedView) {
    this.view_param = selectedView;
  }

  getSourceParam() {
    return this.source_param;
  }

  getViewParam() {
    return this.view_param;
  }

  setCatalog(cat) {
    this._cat = cat;
  }

  getCatalog() {
    return this._cat;
  }

}
