export default {
  setup(selector, render) {
    this.element = document.querySelector(selector);
    this.element.innerHTML = render;

    return this;
  },
  onClick(element, cb) {
    element.addEventListener('click', cb);
  },
};
