export default class SimpleInput extends HTMLElement {
  constructor() {
    super();
    this.type;
    this.placeholder;
    this.name;
    this.required;
  }

  static get observedAttributes() {
    return ["data-type", "data-placeholder", "data-name", "data-required"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "data-type":
        this.type = newVal;
        break;

      case "data-placeholder":
        this.placeholder = newVal;
        break;

      case "data-name":
        this.name = newVal;
        break;

      case "data-required":
        this.required = newVal;
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="form-control">
        <input
            type="${this.type}" 
            placeholder="${this.placeholder}" 
            name="${this.name}" 
            ${this.required ? "required" : ""} />
    </div>`;
  }
}

window.customElements.define("simple-input", SimpleInput);
