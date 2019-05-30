import AccordionTitle from '../app/components/AccordionTitle/AccordionTitle';

describe('AccordionTitle', () => {

  let accordionTitle;
  const testExpected = { title: 'title', content: 'text' };

  beforeAll(() => accordionTitle = new AccordionTitle(testExpected));

  test('It should exist', () => {
    expect(accordionTitle).toBeDefined();
  });

  test('It should be instance of AccordionTitle', () => {
    expect(accordionTitle).toBeInstanceOf(AccordionTitle);
  });

  test('Init method should be defined', () => {
    expect(accordionTitle.render).toBeDefined();
  });

  test('it should have "title" and "text" properties', () => {
    expect(accordionTitle).toHaveProperty('title');
    expect(accordionTitle).toHaveProperty('text');
  });
});