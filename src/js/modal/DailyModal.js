import TrackerCommon from '../common/TrackerCommon.js';
import ModalLayout from './ModalLayout.js';
import { spendTimeData, hourData, minuteData } from '/js/data/dailyModalData';

const DailyModal = Object.create(TrackerCommon);

DailyModal.init = function () {
  const trackerModalElement = document.querySelector('#trackerModal');

  const drawHtml = {
    title: 'Daily 기록하기',
    modalContent: this.drawHtml(),
  };

  ModalLayout.setup(trackerModalElement).render(drawHtml);

  const spendTimeRadioElements = document.querySelectorAll(
    'input[name="spendTime"]',
  );

  this.scoreElement = document.querySelector('#score');
  this.hurdleElement = document.querySelector('#hurdle');
  this.retrospectElement = document.querySelector('#retrospect');

  this.onClick(ModalLayout.btnFooterCloseElement, () =>
    this.removeView(ModalLayout.element),
  );

  this.onChange(spendTimeRadioElements, this.radioHandler.bind(this));
};

DailyModal.radioHandler = function (event) {
  if (event.target.value === '진행중') {
    this.disableHtml(this.scoreElement);
    this.disableHtml(this.hurdleElement);
    this.disableHtml(this.retrospectElement);
  } else {
    this.ableHtml(this.scoreElement);
    this.ableHtml(this.hurdleElement);
    this.ableHtml(this.retrospectElement);
  }
};

DailyModal.radioBox = function (radioData) {
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

DailyModal.selectBox = function (selectBoxData) {
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

DailyModal.drawHtml = function () {
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
              <div class="wrap-hurdles">
                <div class="tag">
                  <span class="txt-tag">youtube</span>
                  <button type="button" class="btn-close">닫기</button>
                </div>
                <div class="tag">
                  <span class="txt-tag">youtube</span>
                  <button type="button" class="btn-close">닫기</button>
                </div>
              </div>
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
