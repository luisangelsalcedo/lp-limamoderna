import data from "../data";

export default class MainTeam extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { building, items } = data.team;
    this.innerHTML = `
    <div class="team">
        <div class="team-portada">
            <img src="img/${building}" alt="Valente2 fachada" />
            <p>Las áreas comunes han sido diseñadas con los mejores acabados, por un equipo de élite, compuesto por interioristas, expertos en iluminación y tecnología.</p>
        </div>
        <div class="team-list">
            ${items
              .map(
                ({ src, fullname, label, bio }) => `
              <div class="team-list__item">
                <div class="team-list__image">
                    <img src="img/${src}" alt="${fullname}" />
                </div>
                <div class="team-list__fullname">${fullname}</div>
                <div class="team-list__label">${label}</div>
                <div class="team-list__bio">${bio}</div>
              </div>`
              )
              .join("")}
        </div>
        <div></div>
    </div>
    `;
  }
}
window.customElements.define("main-team", MainTeam);
