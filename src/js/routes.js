export const ROUTES = {
  MAIN: '/',
  WEEKLY: '/weekly',
};

export const browserRouter = (url, componentCb) => {
  if (!url) {
    history.pushState(null, null, ROUTES.MAIN);

    return;
  }

  history.pushState(null, null, url);

  componentCb();
};
