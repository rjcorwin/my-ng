import { MyNgPage } from './app.po';

describe('my-ng App', () => {
  let page: MyNgPage;

  beforeEach(() => {
    page = new MyNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
