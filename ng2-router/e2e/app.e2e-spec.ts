import { Ng2RouterPage } from './app.po';

describe('ng2-router App', function() {
  let page: Ng2RouterPage;

  beforeEach(() => {
    page = new Ng2RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
