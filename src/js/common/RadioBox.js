import { onChange } from '/js/utils/domEvents.js';

const RadioBox = function () {};

RadioBox.onChange = function (selector, cb) {
  const radioElements = document.querySelectorAll(selector);
  onChange(radioElements, cb);
};

RadioBox.drawHtml = function (radioBoxData) {
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
