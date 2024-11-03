import Daily from './Daily.js';
import Weekly from './Weekly.js';

export const ROUTES = {
  DAILY: {
    url: '/',
    name: 'daily',
  },
  WEEKLY: {
    url: '/weekly',
    name: 'weekly',
  },
};

export const route = {
  daily: {
    path: ROUTES.DAILY.url,
    renderElement: Daily.init,
  },
  weekly: {
    path: ROUTES.WEEKLY.url,
    renderElement: Weekly.init,
  },
};

export const browserRouter = (routeInfo, pageName) => {
  if (!routeInfo.url) {
    history.pushState(ROUTES.DAILY, null, ROUTES.DAILY.url);

    return;
  }

  history.pushState(routeInfo, null, routeInfo.url);

  route[pageName].renderElement();
};
