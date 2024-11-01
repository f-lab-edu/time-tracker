export default {
  init() {
    document.querySelector('.header').innerHTML = this.render();
  },
  render() {
    return `
      <div class="header-inner">
        <h1>
          <a href="/" class="link-tracker">Time Tracker</a>
        </h1>
        <h2 class="tit-date">Oct. 11. 1. Fri</h2>
        <div class="wrap-btns">
          <button type="button" class="btn-header btn-header-weekly">일주일 기록 보기</button>
          <button type="button" class="btn-header btn-header-record">기록하기</button>
        </div>
      </div>
    `;
  },
};
