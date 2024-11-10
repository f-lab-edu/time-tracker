import date from '/js/utils/date';
import { onClick } from '/js/utils/domEvents.js';
import DailyModal from '/js/modal/DailyModal.js';

import { ROUTES, browserRouter } from '/js/routes.js';

const Header = function (element) {
  this.element = element;

  this.element.innerHTML = this.drawHeaderHtml();
};

Header.prototype.init = function () {
  this.titleDate = document.querySelector('.tit-date');
  this.titleDate.innerHTML = date.getCurrentMonthAndDay();

  this.btnTrackerElement = document.querySelector('.btn-tracker');
  this.btnHeaderWeekly = document.querySelector('.btn-header-weekly');
  this.btnHeaderRecord = document.querySelector('.btn-header-record');

  this.dailyModal = new DailyModal();

  onClick(this.btnTrackerElement, () => browserRouter(ROUTES.DAILY, 'daily'));
  onClick(this.btnHeaderWeekly, () => browserRouter(ROUTES.WEEKLY, 'weekly'));
  onClick(this.btnHeaderRecord, this.dailyPopupHandler.bind(this));
};

Header.prototype.drawHeaderHtml = function () {
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

Header.prototype.dailyPopupHandler = function () {
  this.dailyModal.init();
};

export default Header;
