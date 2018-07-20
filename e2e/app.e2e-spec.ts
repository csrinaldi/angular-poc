import { PocAsyncFactoryPage } from './app.po';

describe('poc-async-factory App', () => {
  let page: PocAsyncFactoryPage;

  beforeEach(() => {
    page = new PocAsyncFactoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
