import { ReupClubPage } from './app.po';

describe('reup-club App', () => {
  let page: ReupClubPage;

  beforeEach(() => {
    page = new ReupClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
