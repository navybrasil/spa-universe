export class Router {
  routes = {};

  add(routeName, page, title) {
    this.routes[routeName] = { page, title };
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route.page)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
        if (route.title) {
          document.querySelector("title").textContent = route.title;
        }
      });
  }
}
