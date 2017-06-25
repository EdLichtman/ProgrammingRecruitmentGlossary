import { RecruitmentGlossaryPage } from './app.po';

describe('recruitment-glossary App', () => {
  let page: RecruitmentGlossaryPage;

  beforeEach(() => {
    page = new RecruitmentGlossaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
