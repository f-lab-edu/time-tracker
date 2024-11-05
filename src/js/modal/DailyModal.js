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
              </select>
              <span class="txt-time">시</span>
              <label for="trackerMinute" class="blind">분 선택</label>
              <select
                name="trackerTime"
                id="trackerMinute"
                class="opt-time">
                <option value="0">0</option>
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
              <div class="wrap-spend">
                <div class="box-time">
                  <input
                    type="radio"
                    id="minuit30"
                    name="spendTime"
                    value="30" />
                  <label for="minuit30">30분</label>
                </div>
                <div class="box-time">
                  <input
                    type="radio"
                    id="minuit60"
                    name="spendTime"
                    value="60" />
                  <label for="minuit60">60분</label>
                </div>
                <div class="box-time">
                  <input
                    type="radio"
                    id="minuit90"
                    name="spendTime"
                    value="90" />
                  <label for="minuit90">90분</label>
                </div>
                <div class="box-time">
                  <input
                    type="radio"
                    id="inProgress"
                    name="spendTime"
                    value="inProgress" />
                  <label for="inProgress">진행중</label>
                </div>
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
