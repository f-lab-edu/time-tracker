import TrackerCommon from '../common/TrackerCommon.js';
import ModalLayout from './ModalLayout.js';

const DailyModal = Object.create(TrackerCommon);

DailyModal.init = function () {
  ModalLayout.setup('#trackerModal', ModalLayout.renderView('Daily 기록하기'))
    .insertContent(DailyModal.renderView())
    .init();

  this.onClick(ModalLayout.btnFooterCloseElement, () =>
    this.removeView(ModalLayout.element),
  );
};

DailyModal.spendTimeHtml = function () {
  const spendTime = [
    {
      id: 'minuit30',
      name: 'spendTime',
      value: '30',
    },
    {
      id: 'minuit60',
      name: 'spendTime',
      value: '60',
    },
    {
      id: 'minuit90',
      name: 'spendTime',
      value: '90',
    },
    {
      id: 'inProgress',
      name: 'spendTime',
      value: '진행중',
    },
  ];

  return (
    spendTime.reduce((html, item) => {
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

DailyModal.renderView = function () {
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
              <label for="trackerHour" class="blind">시간 선택</label>
              <select
                name="trackerTime"
                id="trackerHour"
                class="opt-time">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
              </select>
              <span class="txt-time">시</span>
              <label for="trackerMinute" class="blind">분 선택</label>
              <select
                name="trackerTime"
                id="trackerMinute"
                class="opt-time">
                <option value="0">00</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
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
            ${this.spendTimeHtml()}
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
