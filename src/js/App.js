import Layout from './common/Layout';
import Main from './Main';
import Weekly from './Weekly';

export default {
  init() {
    const currentPathName = window.location.pathname;
    const rootElement = document.querySelector('#app');

    Layout.init(rootElement);

    switch (currentPathName) {
      case '/':
        Main.init('.main');
        break;

      case '/weekly':
        Weekly.init('.main');
        break;

      default:
        Main.init('.main');
    }
  },
};
