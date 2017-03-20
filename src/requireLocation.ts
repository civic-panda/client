export const requireLocation = (store: any) => {
  return (nextState: any, replace: any) => {
    console.log(nextState);
    if (!store.getState().user.location) {
      replace({
        pathname: '/select-location',
        query: { next: nextState.location.pathname },
      });
    }
  };
};
