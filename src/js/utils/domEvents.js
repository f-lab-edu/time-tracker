export const renderView = (element, html) => {
  element.innerHTML = html;
};

export const removeHtml = (element, html) => {
  element.innerHTML = '';
};

export const disableHtml = (element) => {
  element.setAttribute('disabled', true);
};

export const enableHtml = (element) => {
  element.removeAttribute('disabled');
};

export const onClick = (element, cb) => {
  element.addEventListener('click', cb);
};

export const onChange = (elements, cb) => {
  elements.forEach(function (element) {
    element.addEventListener('change', cb);
  });
};

export const onKeydown = (element, cb) => {
  element.addEventListener('keydown', cb);
};
