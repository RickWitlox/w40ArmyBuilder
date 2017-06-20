import { W40KArmybuilderFrontAppPage } from './app.po';

describe('w40-k-armybuilder-front-app App', () => {
  let page: W40KArmybuilderFrontAppPage;

  beforeEach(() => {
    page = new W40KArmybuilderFrontAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
