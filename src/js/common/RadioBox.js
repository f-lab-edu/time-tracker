import { onChange } from '/js/utils/domEvents.js';

const RadioBox = function () {};

RadioBox.prototype.onChange = function (selector, cb) {
  this.radiosElements = document.querySelectorAll(selector);
  onChange(this.radiosElements, cb);
};

RadioBox.prototype.drawHtml = function (radioBoxData) {
  return radioBoxData.reduce((html, item) => {
    const { id, name, value, labelText } = item;

    html += ` <div class="box-time">
                  <input
                    type="radio"
                    id="${id}"
                    name="${name}"
                    value="${value}" />
                  <label for="${id}">${labelText}</label>
                </div>`;

    return html;
  }, '');
};

export default RadioBox;
