import { newTitle } from "./newTitle.js";
import {
  homeLink,
  universeLink,
  explorationLink,
  headerImage,
} from "./elements.js";

// Alterar a imagem

export function togglesBackgrondHome() {
  homeLink.addEventListener("click", () => {
    headerImage.setAttribute("src", "./assets/universeHome.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
    const title = "SPA Universe";
    newTitle(title);
  });
  universeLink.addEventListener("click", () => {
    headerImage.setAttribute("src", "./assets/universe.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
    const title = "O Universo";
    newTitle(title);
  });

  explorationLink.addEventListener("click", () => {
    headerImage.setAttribute("src", "./assets/exploration.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
    const title = "Exploração";
    newTitle(title);
  });
}
