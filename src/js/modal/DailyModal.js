import {
  onClick,
  onKeydown,
  disableHtml,
  enableHtml,
  removeHtml,
} from '/js/utils/domEvents.js';
import date from '/js/utils/date';
import ModalLayout from './ModalLayout.js';
import debounce from '../utils/debounce.js';
import RadioBox from '../common/RadioBox.js';
import SelectBox from '../common/SelectBox.js';
import Tag from '../common/Tag.js';

import { spendTimeData, hourData, minuteData } from '/js/data/dailyModalData';

const DailyModal = function () {
  const trackerModalElement = document.querySelector('#trackerModal');
  this.modalLayout = new ModalLayout('Daily 기록하기', trackerModalElement);
};

DailyModal.prototype.dailyData = {
  today: date.getCurrentMonthAndDay('-'),
  foncusedTime: '', // 오늘 하루중 시간
  doing: '', // string
  spendTime: '', // 30, 60, 90, inProgress
  focusScore: '', // 1~100 (소수점 2째 자리 까지 허용)
  hurdles: [], //배열
  retrospect: '',
};

DailyModal.prototype.create = function () {
  // dailyModal 시작
  this.modalLayout.create(DailyModal.drawHtml());

  this.scoreElement = document.querySelector('#score');
  this.hurdleElement = document.querySelector('#hurdle');
  this.retrospectElement = document.querySelector('#retrospect');
  this.wrapHurdlesElement = document.querySelector('.wrap-hurdles');
  this.dailyRecordForm = document.querySelector('#dailyRecord');

  RadioBox.onChange('input[name="spendTime"]', this.radioHandler.bind(this));

  onClick(this.modalLayout.btnFooterCloseElement, () =>
    removeHtml(this.modalLayout.element),
  );

  onClick(this.modalLayout.btnFooterSave, this.submitHandler.bind(this));
  onKeydown(this.hurdleElement, this.hurdleInputHandler.bind(this));
  onClick(this.wrapHurdlesElement, this.tagDeleteHandler.bind(this));
};

DailyModal.prototype.submitHandler = function () {
  const trackerHourElement = this.dailyRecordForm.querySelector('#trackerHour');
  const trackerMinuteElement =
    this.dailyRecordForm.querySelector('#trackerMinute');
  const trackerWorkElement = this.dailyRecordForm.querySelector('#trackerWork');
  const spendTimeCheckedElement = this.dailyRecordForm.querySelector(
    'input[name="spendTime"]:checked',
  );
  const scoreElement = this.dailyRecordForm.querySelector('#score');
  const retrospectElement = this.dailyRecordForm.querySelector('#retrospect');

  // if (!trackerWorkElement.value) {
  //   alert('하는일 입력해 주세요.');
  //   trackerWorkElement.focus();
  // }
  //
  // if (!spendTimeCheckedElement) {
  //   alert('소요 시간을 선택해주세요.');
  // }

  this.dailyData.foncusedTime = `${trackerHourElement.value}시 ${trackerMinuteElement.value}분`;
  this.dailyData.doing = trackerWorkElement.value;
  this.dailyData.spendTime = spendTimeCheckedElement.value;
  this.dailyData.focusScore = scoreElement.value;
  this.dailyData.retrospect = retrospectElement.value;

  // indexedDB.addObjectStore('DAILY');
};

DailyModal.prototype.tagDeleteHandler = function (event) {
  const { target } = event;

  if (target.tagName !== 'BUTTON') return;

  const currentIndex = Number(target.dataset.tagnumber);

  this.dailyData.hurdles.splice(currentIndex, 1);
  this.wrapHurdlesElement.innerHTML = Tag.drawHtml(this.dailyData.hurdles);
};

DailyModal.prototype.hurdleInputHandler = function (event) {
  const { target, key, isComposing } = event;

  if (key === 'Enter' && isComposing) return;

  switch (key) {
    case ',':
      debounce(() => (target.value = null), 0.1);
      this.dailyData.hurdles.push(target.value);
      this.wrapHurdlesElement.innerHTML = Tag.drawHtml(this.dailyData.hurdles);
      break;

    case 'Enter':
      debounce(() => (target.value = null), 0.1);
      this.dailyData.hurdles.push(target.value);
      this.wrapHurdlesElement.innerHTML = Tag.drawHtml(this.dailyData.hurdles);
      break;
  }
};

DailyModal.prototype.radioHandler = function (event) {
  if (event.target.value === '진행중') {
    this.hurdleElement.value = null;
    disableHtml(this.scoreElement);
    disableHtml(this.hurdleElement);
    disableHtml(this.retrospectElement);
  } else {
    enableHtml(this.scoreElement);
    enableHtml(this.hurdleElement);
    enableHtml(this.retrospectElement);
  }
};

DailyModal.drawHtml = function () {
  return `
    <form name="dailyRecord" id="dailyRecord">
      <div class="daily-record">
        <div class="wrap-daily">
          <strong class="daily-title">
            <span class="txt-essential"
              >*
              <span class="blind">필수</span>
            </span>
            집중한 시간
          </strong>
          <div class="daily-detail">
            ${SelectBox.drawHtml(hourData)}
            <span class="txt-time">시</span>
            ${SelectBox.drawHtml(minuteData)}
            <span class="txt-time">분</span>
          </div>
        </div>
        <div class="wrap-daily">
          <strong class="daily-title">
            <label for="trackerWork">
              <span class="txt-essential"
                >*
                <span class="blind">필수</span>
              </span>
              하는 일</label
            >
          </strong>
          <div class="daily-detail">
            <input
              type="text"
              id="trackerWork"
              class="tf-daily"
              placeholder="지금 하는 일을 입력해 주세요." />
          </div>
        </div>
        <div class="wrap-daily">
          <strong class="daily-title">
            <span class="txt-essential"
              >*
              <span class="blind">필수</span>
            </span>
            소요시간
          </strong>
          <div class="daily-detail">
            <div class="wrap-spend">
              ${RadioBox.drawHtml(spendTimeData)}
            </div>
          </div>
        </div>
        <div class="wrap-daily">
          <strong class="daily-title">
            <label for="score">집중 점수</label>
          </strong>
          <div class="daily-detail">
            <input
              type="text"
              id="score"
              class="tf-daily tf-score"
              placeholder="99.9" />
            <span class="txt-score">점</span>
          </div>
        </div>
        <div class="wrap-daily">
          <strong class="daily-title">
            <label for="hurdle">허들</label>
          </strong>
          <div class="daily-detail">
            <input
              type="text"
              id="hurdle"
              class="tf-daily"
              placeholder="방해된 요소를 입력해주세요." />
            <div class="wrap-hurdles"></div>
          </div>
        </div>
        <div class="wrap-daily">
          <strong class="daily-title">
            <label for="retrospect">반성</label>
          </strong>
          <div class="daily-detail">
            <textarea
              id="retrospect"
              class="tf-retrospect"
              name="retrospect"
              maxlength="100"
              placeholder="100자 이내로 입력해 주세요."
              rows="5"></textarea>
          </div>
        </div>
      </div>
    </form>
    `;
};

export default DailyModal;
