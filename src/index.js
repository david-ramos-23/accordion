import Accordion from './app/components/Accordion/Accordion';

import 'normalize.css';
import './assets/scss/main.scss';


const render = (template, node) => {
    node.innerHTML = template.render();
    template.init();
};

const accordion = new Accordion();
render(accordion, document.querySelector('#app'));