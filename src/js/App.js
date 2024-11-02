import { ROUTES, browserRouter } from './routes';

import Daily from './Daily.js';
import Weekly from './Weekly';
import Header from './common/Layout/Header';

export default {
  init() {
    const currentPathName = window.location.pathname;

    Header.init();

    switch (currentPathName) {
      case '/':
        browserRouter(ROUTES.Daily, Daily.init.bind(this));
        break;

      case '/weekly':
        browserRouter(ROUTES.WEEKLY, Weekly.init.bind(this));
        break;

      default:
        browserRouter(ROUTES.Daily, Daily.init.bind(this));
    }
  },
};
