import data from "../data";
import "./gallery-card";

export default class GaleryList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { gallery } = data;

    this.innerHTML = `
    <div class="gallery">
      ${gallery
        .map(
          ({ title, sub, src }, i) =>
            `<gallery-card data-id="gallery-card-${i}" data-title="${title}" data-sub="${sub}" data-src="${src}" data-gallery="${true}"></gallery-card>`
        )
        .join("")}
    </div>`;
  }
}

window.customElements.define("gallery-list", GaleryList);
