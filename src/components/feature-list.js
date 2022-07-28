import data from "../data";
import "./feature-item";

export default class FeatureList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { features } = data;

    this.innerHTML = `
    <div class="feature-list">
      ${features
        .map(feat => `<feature-item data-feat="${feat}"></feature-item>`)
        .join("")}
    </div>`;
  }
}

window.customElements.define("feature-list", FeatureList);
