import routes from './routes';

export default {
  init(selector) {
    this.el = document.querySelector(selector);

    window.history.pushState(null, null, routes.main);
    this.el.innerHTML = `<h1>Main 입니다.</h1>`;
  },
};
