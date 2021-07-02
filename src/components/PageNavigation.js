import loadTemplateContent from '../helper/TemplateLoader.js'

class PageNavigation extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    // TODO: fix flickering on page change
    const templateContent = await loadTemplateContent(
      'components/PageNavigation.html'
    )
    this.shadowRoot.appendChild(templateContent)
  }
}

customElements.define('page-navigation', PageNavigation)
