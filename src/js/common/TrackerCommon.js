export default {
  setup(selector, render) {
    this.element = document.querySelector(selector);

    if (!render) {
      return this;
    }

    this.element.innerHTML = render;

    return this;
  },
  renderView(element, render) {
    element.innerHTML = render;

    return this;
  },
  removeView(element) {
    element.innerHTML = '';
  },
  onClick(element, cb) {
    element.addEventListener('click', cb);
  },
};
