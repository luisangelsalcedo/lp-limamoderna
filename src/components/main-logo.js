import data from "../data";
import logoSGV from "../svg/logo.svg?raw";

export default class MainLogo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="logo">${logoSGV}</div>
    `;
  }
}
window.customElements.define("main-logo", MainLogo);
