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
  disableHtml(element) {
    element.setAttribute('disabled', true);
  },
  ableHtml(element) {
    element.removeAttribute('disabled');
  },
  onClick(element, cb) {
    element.addEventListener('click', cb);
  },
  onChange(elements, cb) {
    elements.forEach(function (radio) {
      radio.addEventListener('change', cb);
    });
  },
  onKeydown(element, cb) {
    element.addEventListener('keydown', cb);
  },
};
