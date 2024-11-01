export default {
  init() {
    document.querySelector('.header').innerHTML = this.render();
  },
  render() {
    return `
      <div class="header-inner">
        <h1 class="tit-header">Oct. 23. wed</h1>
        <div class="wrap-btns">
          <button type="button" class="btn-header-weekly">일주일 기록 보기</button>
          <button type="button" class="btn-header-record">기록하기</button>
        </div>
      </div>
    `;
  },
};
