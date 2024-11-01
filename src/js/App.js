import Layout from './common/Layout';
import { ROUTES, browserRouter } from './routes';

import Main from './Main';
import Weekly from './Weekly';

export default {
  init() {
    const currentPathName = window.location.pathname;
    const rootElement = document.querySelector('#app');

    Layout.init(rootElement);

    switch (currentPathName) {
      case '/':
        browserRouter(ROUTES.MAIN, Main.init());
        break;

      case '/weekly':
        browserRouter(ROUTES.WEEKLY, Weekly.init());
        break;

      default:
        browserRouter(ROUTES.MAIN, Main.init());
    }
  },
};
