export default {
  setup(element) {
    if (!element) throw Error('element가 없습니다.');

    this.element = element;

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
