import { ROUTES, route, browserRouter } from './routes';
import initDBTest from './utils/IndexedDBTest.js';

import HeaderDOM from './common/Layout/Header';

export default {
  async init() {
    const currentPathName = window.location.pathname;
    const headerElement = document.querySelector('.header');

    const header = new HeaderDOM(headerElement);

    header.create();

    try {
      // IndexedDB 초기화
      await initDBTest.open();
      console.log('Database is ready for use!');
    } catch (error) {
      console.error('Error initializing database:', error);
    }

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
