import "../sass/main.scss";
import "fontawesome-4.7/css/font-awesome.min.css";
import "@fancyapps/ui/dist/fancybox.umd.js";
import "@fancyapps/ui/dist/fancybox.css";

import data from "../data";
import "../components";
import { fpInit, createElement } from "../utils";

const { sections } = data;
const app = document.getElementById("app");
const anchors = sections.map(({ anchor }) => anchor);

sections.forEach((item, i) => {
  const { id, header } = item;
  const { title, sub, details } = header;

  const section = createElement("div");
  const container = createElement("div", "container");
  section.classList.add("section", "fp-auto-height", id);

  if (id === "section1") {
    const { bg } = item;

    section.style.backgroundImage = `url('img/${bg}')`;
    container.innerHTML = `
    <div>
      <header-title
        data-type="main"
        data-title="${title}"
        data-sub="${sub}"
        data-details="${details}">
      </header-title>
    </div>
    <div>
      <main-form></main-form>
    </div>
    `;
  }

  if (id === "section2") {
    container.innerHTML = `
    <div class="background"></div>
    <header-title
      data-type="primary"
      data-title="${title}"
      data-sub="${sub}">
    </header-title>
    <gallery-list></gallery-list>
    `;
  }

  if (id === "section3") {
    const { bg } = item;

    section.style.backgroundImage = `url('img/${bg}')`;
    container.innerHTML = `
    <header-title
    data-type="secondary"
    data-title="${sub} ${title}">
    </header-title>
    <main-video></main-video>`;
  }

  if (id === "section4") {
    container.innerHTML = `
    <header-title
      data-type="primary"
      data-title="${header.title}"
      data-sub="${header.sub}"
      data-details="${header.details}">
    </header-title>
    <feature-list></feature-list>`;
  }

  if (id === "section5") {
    container.innerHTML = `
    <header-title 
      data-type="primary" 
      data-title="${header.title}" 
      data-sub="${header.sub}"
      data-details="${header.details}">
    </header-title>
    <main-team></main-team>`;
  }

  if (id === "section6") {
    container.innerHTML = `
    <main-location></main-location>`;
  }

  if (id === "section7") {
    container.innerHTML = `
    <main-credits></main-credits>`;
  }

  if (id === "section8") {
    container.innerHTML = `
    <main-info></main-info>`;
  }

  section.append(container);
  app.append(section);
});

fpInit(anchors);
