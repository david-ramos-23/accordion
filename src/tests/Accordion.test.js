import Accordion from '../app/components/Accordion/Accordion';

describe('Accordion', () => {
  
  let accordion;

  beforeAll(() => accordion = new Accordion);

  test('It should exist', () => {
    expect(accordion).toBeDefined();
  });

  test('Init method should be defined', () => {
    expect(accordion.init).toBeDefined();
  });

  test('It should be instance of Accordion', () => {
    expect(accordion).toBeInstanceOf(Accordion);
  });
});