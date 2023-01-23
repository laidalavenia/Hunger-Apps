import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    this._button.addEventListener('click', (event) => {
      event.stopPropagation();
      this._drawer.classList.toggle('open');
    });

    this._content.addEventListener('click', (event) => {
      event.stopPropagation();
      this._drawer.classList.remove('open');
    });
  }

  async renderPage() {
    const content = window.location.hash.slice(1).toLowerCase();
    if (content === 'maincontent') {
      return;
    }
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
