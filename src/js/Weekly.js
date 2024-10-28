import routes from './routes';

export default {
  init(selector) {
    this.el = document.querySelector(selector);

    history.pushState(null, null, routes.weekly);
    this.el.innerHTML = `<h1>Weekly 입니다.</h1>`;
  },
};
