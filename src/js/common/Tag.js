const Tag = function () {};

Tag.drawTag = function (tagData) {
  return tagData.reduce((html, item, index) => {
    html += ` 
              <div class="tag">
                <span class="txt-tag">${item}</span>
                <button type="button" data-tagnumber="${index}" class="btn-close">삭제</button>
              </div>
            `;

    return html;
  }, '');
};

export default Tag;
