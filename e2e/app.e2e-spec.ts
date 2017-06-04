import { SpelbroshanPage } from './app.po';

describe('spelbroshan App', () => {
  let page: SpelbroshanPage;

  beforeEach(() => {
    page = new SpelbroshanPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
