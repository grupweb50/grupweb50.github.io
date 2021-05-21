class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2021 Ricardo Armando Machorro Reyes. (3CV50)`;
  }
}
customElements.define("mi-footer", MiFooter);
