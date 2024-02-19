import { Router } from "./router.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

// Alterar a imagem

const homeLink = document.querySelector('a[href="/"]');
const universeLink = document.querySelector('a[href="/universe"]');
const explorationLink = document.querySelector('a[href="/exploration"]');

const headerImage = document.querySelector("#imgHeader");

homeLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/universeHome.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
});

universeLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/universe.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
  // removeDisplay();
});

explorationLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/exploration.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
});

// function removeDisplay() {
//   const app = document.getElementById("app");
//   app.style.display = "block";
//   console.log("Flex");
// }
