import { Router } from "./router.js";
import * as events from "./events.js";
const router = new Router();

router.add("/", "/pages/home.html", "SPA Universe");
router.add("/universe", "/pages/universe.html", "O Universo");
router.add("/exploration", "/pages/exploration.html", "Exploração");
router.add(404, "/pages/404.html", "Página não encontrada");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

events.togglesBackgrondHome();
