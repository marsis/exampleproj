import { ExampleprojPage } from './app.po';

describe('exampleproj App', function() {
  let page: ExampleprojPage;

  beforeEach(() => {
    page = new ExampleprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
