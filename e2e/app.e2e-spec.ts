import { StylesAnimationPage } from './app.po';

describe('styles-animation App', () => {
  let page: StylesAnimationPage;

  beforeEach(() => {
    page = new StylesAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
