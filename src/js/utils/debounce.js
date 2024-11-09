let timer = null;

const debounce = function (fn, delayTime) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(fn, delayTime);
};

export default debounce;
