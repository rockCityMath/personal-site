class Topbar extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const [html, css] = await Promise.all([
      fetch("/components/topbar/topbar.html").then(r => r.text()),
      fetch("/components/topbar/topbar.css").then(r => r.text()),
    ]);

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;
  }
}

customElements.define("top-bar", Topbar);
