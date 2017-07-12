import { WingsV1Page } from './app.po';

describe('wings-v1 App', () => {
  let page: WingsV1Page;

  beforeEach(() => {
    page = new WingsV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
