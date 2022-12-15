class AppBar extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="app-bar__menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
      <h1>${this.title}</h1>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
      <ul>
        <li><a href="#/restaurants">Restaurants</a></li>
        <li><a href="#/like">Favorite</a></li>
        <li><a href="https://www.instagram.com/laidalav_/">About Us</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('header-restaurants', AppBar);
