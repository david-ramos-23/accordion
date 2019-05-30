class AccordionPanel {
  constructor(text) {
    this.text = text;
  }

  render () {
    return `
      <dd class='AccordionPanel is-hidden'>
        <p>${this.text}</p>
      </dd>`;
  }
}

export default AccordionPanel;