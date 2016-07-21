import { Ng2CatdisplayPage } from './app.po';

describe('ng2-catdisplay App', function() {
  let page: Ng2CatdisplayPage;

  beforeEach(() => {
    page = new Ng2CatdisplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
