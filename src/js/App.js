import { ROUTES, route, browserRouter } from './routes';

import Header from './common/Layout/Header';

export default {
  init() {
    const currentPathName = window.location.pathname;
    const headerElement = document.querySelector('.header');

    const header = new Header(headerElement);

    header.init();

    switch (currentPathName) {
      case '/':
        browserRouter(ROUTES.DAILY, 'daily');
        break;

      case '/weekly':
        browserRouter(ROUTES.WEEKLY, 'weekly');
        break;

      default:
        browserRouter(ROUTES.DAILY, 'daily');
    }

    // 브라우저 앞으로 가기 및 뒤로가기 눌렀을 때 페이지 변경 대응
    window.addEventListener('popstate', (event) => {
      const { name } = event.state;
      route[name].renderElement();
    });
  },
};
