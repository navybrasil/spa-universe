import { newTitle } from "./newTitle.js";
import { getElements } from "./elements.js";

export function togglesBackgrondHome() {
  const { homeLink, universeLink, explorationLink, headerImage } =
    getElements();

  function updateContent(src, title) {
    headerImage.setAttribute("src", src);
    newTitle(title);
  }

  homeLink.addEventListener("click", () => {
    updateContent("./assets/universeHome.jpg", "SPA Universe");
  });
  universeLink.addEventListener("click", () => {
    updateContent("./assets/universe.jpg", "O Universo");
  });

  explorationLink.addEventListener("click", () => {
    updateContent("./assets/exploration.jpg", "Exploração");
  });
}
