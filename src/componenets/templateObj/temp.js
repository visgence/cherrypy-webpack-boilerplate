import template from './temp.html';

import './temp.scss';


$(() => {
    class TemplateObject extends HTMLElement {
        createdCallback() {
            this.innerHTML = template;
        }
        attachedCallback() { };
        attributeChangedCallback(attrName, oldVal, newVal) { };
    }
    document.registerElement('template-object', TemplateObject);
});
