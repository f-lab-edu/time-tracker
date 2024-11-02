export const ROUTES = {
  MAIN: '/',
  WEEKLY: '/weekly',
};

export const browserRouter = (url, componentCb) => {
  const currentUrl = ROUTES[url];

  if (!currentUrl) {
    history.pushState(null, null, ROUTES.MAIN);

    return;
  }

  history.pushState(null, null, currentUrl);

  componentCb();
};
