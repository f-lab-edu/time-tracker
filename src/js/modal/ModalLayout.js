import TrackerCommon from '/js/common/TrackerCommon.js';

const ModalLayout = Object.create(TrackerCommon);

ModalLayout.renderView = function (title) {
  return `
      <div class="popup">
        <div class="popup-content">
          <div class="popup-content-header">
            <h4 class="popup-title">${title}</h4>
          </div>
          <div class="popup-content-body"></div>
          <div class="popup-content-footer">
            <button type="submit" class="btn-footer btn-footer-save">
              저장
            </button>
            <button type="button" class="btn-footer btn-footer-close">
              닫기
            </button>
          </div>
        </div>
      </div>
    `;
};

export default ModalLayout;
