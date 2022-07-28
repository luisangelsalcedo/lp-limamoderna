import data from "../data";

export default class MainVideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { url, preview } = data.video;
    this.innerHTML = `
    <div class="video">
        <a href="${url}" data-fancybox>
            <i class="fa fa-play" aria-hidden="true"></i>
            <img src="img/${preview}" alt="aa" />
        </a>
    </div>
    `;
  }
}
window.customElements.define("main-video", MainVideo);
