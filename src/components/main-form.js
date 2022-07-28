import data from "../data";
import MainLogo from "./main-logo";
import "./simple-input";

export default class MainForm extends HTMLElement {
  constructor() {
    super();
    this.isDisabled = "hola";
  }

  connectedCallback() {
    const { title, action, method, target, items, buttonlabel } = data.form;
    this.innerHTML = `
    <div class="form">
        <main-logo></main-logo>
        <h3 class="form__title">${title}</h3>
        <iframe class="iframe-hidden" id="iframe-hidden" name="iframe-hidden"></iframe>
        <form action="${action}" method="${method}" target="${target}" class="form__content">
            ${items
              .map(
                ({ type, required, placeholder, name }) =>
                  `<simple-input data-type="${type}" data-required="${required}" data-placeholder="${placeholder}" data-name="${name}"></simple-input>`
              )
              .join("")}
            <div class="form__legal">
                <input type="checkbox" checked />
                Aceptas los <a href="#">Términos y Condiciones</a>
            </div>
            <button class="btn btn-block btn-primary" type="submit" >${buttonlabel}</button>
            </form>
        <div class="form__response"></div>
    </div>`;

    // EVENTS
    const checklegal = this.querySelector("[type='checkbox']");
    const response = this.querySelector(".form__response");
    const form = this.querySelector("form");

    checklegal.addEventListener("change", e => {
      const btnSubmit = this.querySelector("button");
      if (e.target.checked) {
        btnSubmit.removeAttribute("disabled");
      } else {
        btnSubmit.setAttribute("disabled", "");
      }
    });

    form.addEventListener("submit", e => {
      // e.preventDefault();
      form.style.display = "none";
      response.style.display = "block";
      response.innerHTML = `<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i><p>Enviando...</p>`;

      let timer = setTimeout(() => {
        response.innerHTML = `
      <i class="fa fa-check-circle fa-3x" aria-hidden="true"></i>
      <p>
        Sus datos fueron enviados<br>
        <a href="#" id="resetform">Enviar otra respuesta</a>
      </p>`;

        const resetform = response.querySelector("#resetform");
        resetform.addEventListener("click", handlerReset);
        clearTimeout(timer);
      }, 2000);
    });

    const handlerReset = () => {
      response.style.display = "none";
      form.style.display = "block";
      document.querySelectorAll("input").forEach(input => {
        input.value = "";
      });
    };
  }
}

window.customElements.define("main-form", MainForm);
