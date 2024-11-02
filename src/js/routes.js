export const ROUTES = {
  Daily: {
    url: '/',
    name: 'daily',
  },
  WEEKLY: {
    url: '/weekly',
    name: 'weekly',
  },
};

export const browserRouter = (url, componentCb) => {
  if (!url) {
    history.pushState(null, null, ROUTES.Daily.url);

    return;
  }

  history.pushState({ name: url.name }, null, url.url);

  componentCb();
};
