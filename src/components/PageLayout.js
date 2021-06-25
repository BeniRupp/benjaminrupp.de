import loadTemplateContent from '../helper/TemplateLoader.js'
import './PageNavigation.js'

class PageLayout extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    const templateContent = await loadTemplateContent(
      'components/PageLayout.html'
    )
    this.shadowRoot.appendChild(templateContent)
  }
}

customElements.define('page-layout', PageLayout)
