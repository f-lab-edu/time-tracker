import date from '/js/utils/date';
import TrackerCommon from '/js/common/TrackerCommon';
import DailyModal from '/js/modal/DailyModal.js';

import { ROUTES, browserRouter } from '/js/routes.js';

const Header = Object.create(TrackerCommon);

Header.render = function (element) {
  this.setup(element).renderView(this.element, this.drawHtml()).init();
};

Header.init = function () {
  this.titleDate = document.querySelector('.tit-date');
  this.titleDate.innerHTML = date.getCurrentMonthAndDay();

  this.btnTrackerElement = document.querySelector('.btn-tracker');
  this.btnHeaderWeekly = document.querySelector('.btn-header-weekly');
  this.btnHeaderRecord = document.querySelector('.btn-header-record');

  this.onClick(this.btnTrackerElement, () =>
    browserRouter(ROUTES.DAILY, 'daily'),
  );
  this.onClick(this.btnHeaderWeekly, () =>
    browserRouter(ROUTES.WEEKLY, 'weekly'),
  );

  this.onClick(this.btnHeaderRecord, this.dailyPopupHandler);
};

Header.drawHtml = function () {
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

Header.dailyPopupHandler = function () {
  DailyModal.init();
};

export default Header;
