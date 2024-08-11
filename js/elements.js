export function getElements() {
  return {
    homeLink: document.querySelector('a[href="/"]'),
    universeLink: document.querySelector('a[href="/universe"]'),
    explorationLink: document.querySelector('a[href="/exploration"]'),
    headerImage: document.querySelector("#imgHeader"),
  };
}
