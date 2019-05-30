import AccordionPanel from '../AccordionPanel/AccordionPanel';

class AccordionTitle {
  constructor({ title, text }) {
    this.title = title;
    this.text = text;
  }

  render() {
    const text = new AccordionPanel(this.text).render();
    return `
    <dt class='AccordionTitle is-closed'>${this.title}
    <svg viewBox="0 0 20 20" width="20" height="20" class="Accordion-arrow"><title>cheveron down</title><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></dt>
    ${text}`;
  }
}

export default AccordionTitle;