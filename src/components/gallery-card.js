export default class GaleryCard extends HTMLElement {
  constructor() {
    super();
    this.title;
    this.sub = "";
    this.src;
    this.gallery;
    this.id;
  }

  static get observedAttributes() {
    return ["data-title", "data-sub", "data-src", "data-gallery", "data-id"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "data-title":
        this.title = newVal;
        break;

      case "data-sub":
        this.sub = newVal;
        break;

      case "data-src":
        this.src = newVal;
        break;

      case "data-gallery":
        this.gallery = newVal;
        break;

      case "data-id":
        this.id = newVal;
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="gallery-card" ${this.id ? `id="${this.id}"` : ""}>
        <a href="img/${this.src}" ${
      this.gallery ? `data-fancybox="gallery"` : `data-fancybox`
    }>
            <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <div class="gallery-card-header">
            <div class="gallery-card-header__title">${this.title}</div>
            <div class="gallery-card-header__sub">${this.sub}</div>
        </div>
        <img src="img/${this.src}" alt="" />
    </div>`;
  }
}

window.customElements.define("gallery-card", GaleryCard);
