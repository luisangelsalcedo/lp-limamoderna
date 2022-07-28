import data from "../data";

export default class MainCredits extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { credits } = data;
    this.innerHTML = `
    <div class="credits">
      ${credits
        .map(
          ({ title, src, details }) => `
          <div class="credits-item">
              <div class="credits-item__title">${title}</div>
              <div class="credits-item__logo">
                <img src="./img/${src}" alt="" />
              </div>
              <div class="credits-item__details">${details}</div>
          </div>`
        )
        .join("")}
        
    </div>
    `;
  }
}
window.customElements.define("main-credits", MainCredits);
