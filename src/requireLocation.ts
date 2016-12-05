export const requireLocation = (store: any) => {
  return (nextState: any, replace: any) => {
    if (!store.getState().user.location) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }
};
