import Header from './Header';

export default {
  init(element) {
    this.el = element;
    this.el.innerHTML = this.render();

    Header.init();
  },
  render() {
    return `
      <article class="cont-tracker">
        <header class="header"></header>
        <main class="main"></main>
      </article>
    `;
  },
};
