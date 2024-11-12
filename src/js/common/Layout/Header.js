import date from '/js/utils/date';
import { onClick } from '/js/utils/domEvents.js';
import DailyModal from '/js/modal/DailyModal.js';

import { ROUTES, browserRouter } from '/js/routes.js';

const HeaderDOM = function (element) {
  this.element = element;
};

HeaderDOM.prototype.create = function () {
  this.element.innerHTML = HeaderDOM.drawHtml();

  const titleDate = document.querySelector('.tit-date');
  titleDate.innerHTML = date.getCurrentMonthAndDay();

  const btnTrackerElement = document.querySelector('.btn-tracker');
  const btnHeaderWeekly = document.querySelector('.btn-header-weekly');
  const btnHeaderRecord = document.querySelector('.btn-header-record');

  this.dailyModal = new DailyModal();

  onClick(btnTrackerElement, () => browserRouter(ROUTES.DAILY, 'daily'));
  onClick(btnHeaderWeekly, () => browserRouter(ROUTES.WEEKLY, 'weekly'));
  onClick(btnHeaderRecord, this.dailyPopupHandler.bind(this));
};

HeaderDOM.drawHtml = function () {
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
};

HeaderDOM.prototype.dailyPopupHandler = function () {
  this.dailyModal.init();
};

export default HeaderDOM;
