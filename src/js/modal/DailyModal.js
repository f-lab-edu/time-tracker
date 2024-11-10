import {
  onClick,
  onChange,
  onKeydown,
  disableHtml,
  enableHtml,
  removeHtml,
} from '/js/utils/domEvents.js';
import ModalLayout from './ModalLayout.js';
import debounce from '../utils/debounce.js';
import { spendTimeData, hourData, minuteData } from '/js/data/dailyModalData';

const DailyModal = function () {
  const trackerModalElement = document.querySelector('#trackerModal');
  this.modalLayout = new ModalLayout('Daily 기록하기', trackerModalElement);
};

DailyModal.prototype.init = function () {
  this.modalLayout.init(this.drawDailyModalHtml());

  const spendTimeRadioElements = document.querySelectorAll(
    'input[name="spendTime"]',
  );

  this.scoreElement = document.querySelector('#score');
  this.hurdleElement = document.querySelector('#hurdle');
  this.retrospectElement = document.querySelector('#retrospect');
  this.wrapHurdlesElement = document.querySelector('.wrap-hurdles');

  onClick(this.modalLayout.btnFooterCloseElement, () =>
    removeHtml(this.modalLayout.element),
  );

  onChange(spendTimeRadioElements, this.radioHandler.bind(this));

  onKeydown(this.hurdleElement, this.hurdleInputHandler.bind(this));

  onClick(this.wrapHurdlesElement, this.tagDeleteHandler.bind(this));
};

DailyModal.prototype.hurdleData = [];

DailyModal.prototype.tagDeleteHandler = function (event) {
  const { target } = event;

  if (target.tagName !== 'BUTTON') return;

  const currentIndex = Number(target.dataset.tagnumber);

  this.hurdleData.splice(currentIndex, 1);

  this.wrapHurdlesElement.innerHTML = this.drawTag(this.hurdleData);
};

DailyModal.prototype.hurdleInputHandler = function (event) {
  const { target, key, isComposing } = event;

  if (key === 'Enter' && isComposing) return;

  switch (key) {
    case ',':
      debounce(() => (target.value = null), 0.1);
      this.hurdleData.push(target.value);
      this.wrapHurdlesElement.innerHTML = this.drawTag(this.hurdleData);
      break;

    case 'Enter':
      debounce(() => (target.value = null), 0.1);
      this.hurdleData.push(target.value);
      this.wrapHurdlesElement.innerHTML = this.drawTag(this.hurdleData);
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

DailyModal.prototype.radioBox = function (radioData) {
  return (
    radioData.reduce((html, item) => {
      const { id, name, value } = item;

      html += ` <div class="box-time">
                  <input
                    type="radio"
                    id="${id}"
                    name="${name}"
                    value="${value}" />
                  <label for="${id}">${id === 'inProgress' ? '진행중' : value + '분'}</label>
                  </div>`;

      return html;
    }, '<div class="wrap-spend">') + '</div>'
  );
};

DailyModal.prototype.selectBox = function (selectBoxData) {
  const { labelText, id, name, optionData } = selectBoxData;

  const optionHtml =
    optionData.reduce((html, item) => {
      const { value, text } = item;

      html += `<option value="${value}">${text}</option>`;

      return html;
    }, `<select name="${name}" id="${id}" class="opt-time">`) + '</select>';

  return `
      <label for="${id}" class="blind">${labelText}</label>
      ${optionHtml}
    `;
};

DailyModal.prototype.drawTag = function (tagData) {
  return tagData.reduce((html, item, index) => {
    html += ` 
              <div class="tag">
                <span class="txt-tag">${item}</span>
                <button type="button" data-tagnumber="${index}" class="btn-close">닫기</button>
              </div>
            `;

    return html;
  }, '');
};

DailyModal.prototype.drawDailyModalHtml = function () {
  return `
      <form action="#none">
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
              ${this.selectBox(hourData)}
              <span class="txt-time">시</span>
              ${this.selectBox(minuteData)}
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
            ${this.radioBox(spendTimeData)}
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
