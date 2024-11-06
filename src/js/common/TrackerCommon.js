export default {
  setup(selector, html) {
    this.element = document.querySelector(selector);

    if (!html) {
      return this;
    }

    this.element.innerHTML = html;

    return this;
  },
  renderView(element, html) {
    element.innerHTML = html;

    return this;
  },
  removeView(element) {
    element.innerHTML = '';
  },
  onClick(element, cb) {
    element.addEventListener('click', cb);
  },
};
