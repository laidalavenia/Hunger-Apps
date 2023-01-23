class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.author = this.getAttribute('author') || null;
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      width: 100%;
      color: black;
      text-align : center;
    }
  </style>
      <h3>Design By ${this.author}</h3>
      <p>${this.caption}</p>
    `;
  }
}

customElements.define('footer-movie', Footer);
