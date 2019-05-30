import AccordionPanel from '../app/components/AccordionPanel/AccordionPanel';

describe('AccordionPanel', () => {

  let accordionPanel;

  beforeAll(() => accordionPanel = new AccordionPanel);

  test('It should exist', () => {
    expect(accordionPanel).toBeDefined();
  });

  test('Init method should be defined', () => {
    expect(accordionPanel.render).toBeDefined();
  });

  test('It should have property "text"', () => {
    expect(accordionPanel).toHaveProperty('text');
  });

  test('It should be instance of AccordionPanel', () => {
    expect(accordionPanel).toBeInstanceOf(AccordionPanel);
  });
});