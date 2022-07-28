export default class HeaderTitle extends HTMLElement {
  constructor() {
    super();
    this.type = "secondary";
    this.title;
    this.sub;
    this.details;
  }

  static get observedAttributes() {
    return ["data-type", "data-title", "data-sub", "data-details"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "data-type":
        this.type = newVal;
        break;

      case "data-title":
        this.title = newVal;
        break;

      case "data-sub":
        this.sub = newVal;
        break;

      case "data-details":
        this.details = newVal;
        break;
    }
  }

  connectedCallback() {
    // const shadow = this.attachShadow({ mode: "open" });

    this.innerHTML = `
    <div class="header-${this.type}">
      ${
        this.sub
          ? `<div class="header-${this.type}__sub">${this.sub}</div>`
          : ""
      }
      <h1 class="header-${this.type}__title">${this.title}</h1>
      ${
        this.details
          ? `<div class="header-${this.type}__details">${this.details}</div>`
          : ""
      }
    </div>`;
  }
}

window.customElements.define("header-title", HeaderTitle);
