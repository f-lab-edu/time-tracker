import date from '/js/utils/date';

export default {
  init() {
    this.headerElement = document.querySelector('.header');

    this.headerElement.innerHTML = this.render();

    this.titleDate = document.querySelector('.tit-date');
    this.titleDate.innerHTML = date.getMonthDay();
  },
  render() {
    return `
      <div class="header-inner">
        <h1>
          <button class="link-tracker">Time Tracker</button>
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
