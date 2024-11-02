import date from '/js/utils/date';
import Weekly from '/js/Weekly.js';
import Daily from '/js/Daily.js';
import { ROUTES, browserRouter } from '../../../routes.js';

export default {
  init() {
    this.headerElement = document.querySelector('.header');

    this.headerElement.innerHTML = this.renderView();

    this.titleDate = document.querySelector('.tit-date');
    this.titleDate.innerHTML = date.getCurrentMonthAndDay();

    this.btnTrackerElement = document.querySelector('.btn-tracker');
    this.btnHeaderWeekly = document.querySelector('.btn-header-weekly');

    this.btnTrackerElement.addEventListener('click', () => {
      browserRouter(ROUTES.Daily, Daily.init.bind(this));
    });

    this.btnHeaderWeekly.addEventListener('click', () => {
      browserRouter(ROUTES.WEEKLY, Weekly.init.bind(this));
    });
  },
  renderView() {
    return `
      <div class="header-inner">
        <h1>
          <button class="btn-tracker">Time Tracker</button>
        </h1>
        <h2 class="tit-date"></h2>
        <div class="wrap-btns">
          <button type="button" class="btn-header btn-header-weekly">일주일 기록 보기</button>
          <button type="button" class="btn-header btn-header-record">기록하기</button>
        </div>
      </div>
    `;
  },
  movePage() {},
  emitElement(selector) {
    return document.querySelector(selector);
  },
};
