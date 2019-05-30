import AccordionTitle from '../AccordionTitle/AccordionTitle';
import {accordionTitles} from '../../constants';
import {dataSection as getDataSection} from '../../services/dataSection';

class Accordion {

  handleEventListener = async() => {
  
    const accordionItems = await this.getAllAccordionsByClass('.AccordionTitle');
    accordionItems.forEach(accordionItem => {
        accordionItem.addEventListener('click', this.toggleAccordion);
    });
  };

  toggleAccordion = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const selectedAccordionItem = e.target.nextElementSibling;
    const selectedAccordionTitle = e.target;

    if(selectedAccordionItem.classList.contains('is-active')){
        this.toggleClass(selectedAccordionItem, 'is-active', 'remove');
        this.toggleClass(selectedAccordionTitle, 'is-open', 'remove');
        this.toggleClass(selectedAccordionTitle, 'is-closed', 'add');
        this.toggleClass(selectedAccordionItem, 'is-hidden', 'add');
    } else {
        this.toggleActiveClass(selectedAccordionItem, selectedAccordionTitle);
    }
  };

  toggleActiveClass = async(accordionItem, accordionTitle) => {
    let activeAccordionItem = await this.getAllAccordionsByClass('.AccordionPanel');
    await activeAccordionItem.forEach(
      (accordionItem, index) => { 
        const accordionTitle = accordionItem.previousElementSibling;
        this.toggleClass(accordionItem, 'is-active', 'remove');
        this.toggleClass(accordionTitle, 'is-open', 'remove');
        this.toggleClass(accordionTitle, 'is-closed', 'add');
        this.toggleClass(accordionItem, 'is-hidden', 'add');
    });

    this.toggleClass(accordionTitle, 'is-closed', 'remove');
    this.toggleClass(accordionItem, 'is-hidden', 'remove');
    this.toggleClass(accordionItem, 'is-active', 'add');
    this.toggleClass(accordionTitle, 'is-open', 'add');

  };

  toggleClass = (el, c, type) => {
    el.classList[type](c);
  };

  getAllAccordionsByClass = c => {
    return document.querySelectorAll(c);
  };

  addSections = async() => {
    const ajaxSection = await getDataSection(4);
    const sections = [...accordionTitles, ajaxSection];
    const accordionItems = sections && sections.map((sectionData) => new AccordionTitle(sectionData).render()).join('');

    this.getAllAccordionsByClass('.Accordion')[0].innerHTML = accordionItems;
  };

  render() {
    return `
        <h1>Animated SCSS & VanillaJS Accordion!</h1>

        <dl class="u-container Accordion"></dl> 
    `;
  }

  init = async() => {
    await this.addSections();
    await this.handleEventListener();
  };
}

export default Accordion;