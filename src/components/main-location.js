import data from "../data";
import GaleryCard from "./gallery-card";

export default class MainLocation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { map, status, district, price, offerprice, finish } = data.location;
    this.innerHTML = `
    <div class="location">
        <div>
            <gallery-card data-src="${map}" data-title="${district}"></gallery-card>
        </div>
        <div>
            <div class="location__title">${status}</div>
        </div>
        <div>
            <div class="location__sub">MÚDATE A ${district} DESDE:</div>
            <div class="location__title">${offerprice}</div>
            <div class="location__sub">Precio Normal: ${price}</div>
            <br><br>
            <div class="location__sub">ENTREGA</div>
            <div class="location__title">${finish}</div>
        </div>
    </div>
    `;
  }
}
window.customElements.define("main-location", MainLocation);
{
  /* <a class="location__map" data-fancybox="iframe" href="img/${map}">
  <img src="img/${map}" alt="" />
</a>; */
}
