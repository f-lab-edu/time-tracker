const SelectBox = function () {};

SelectBox.drawSelects = function (selectBoxData) {
  const { labelText, id, name, optionData } = selectBoxData;

  const optionHtml =
    optionData.reduce((html, item) => {
      const { value, text } = item;

      html += `<option value="${value}">${text}</option>`;

      return html;
    }, `<select name="${name}" id="${id}" class="opt-time">`) + '</select>';

  return `
      <label for="${id}" class="blind">${labelText}</label>
      ${optionHtml}
    `;
};

export default SelectBox;
