class PageNavigation extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    const template = await fetch('components/PageNavigation.html')
    this.shadowRoot.innerHTML = await template.text()
  }
}

customElements.define('page-navigation', PageNavigation)
