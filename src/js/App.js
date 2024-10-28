import Main from './Main';
import Weekly from './Weekly';

export default {
  init() {
    const currentPathName = window.location.pathname;

    switch (currentPathName) {
      case '/':
        Main.init('#app');
        break;

      case '/weekly':
        Weekly.init('#app');
        break;

      default:
        Main.init('#app');
    }
  },
};
