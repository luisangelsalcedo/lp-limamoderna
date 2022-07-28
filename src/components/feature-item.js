export default class FeatureItem extends HTMLElement {
  constructor() {
    super();
    this.feat;
  }

  static get observedAttributes() {
    return ["data-feat", "aaa"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "data-feat":
        this.feat = newVal;
        break;

      case "aaa":
        console.log(newVal.split(","));
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="features-list__item">
        <i class="fa fa-check" aria-hidden="true"></i>
        <span>${this.feat}</span>
    </div>`;
  }
}

window.customElements.define("feature-item", FeatureItem);
