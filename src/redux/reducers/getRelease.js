const getRelease = (state = '', action) => {
  switch (action.type) {
    case 'ADD_FILTER_RELEASE':
      return action.action;
    default:
      return state.release;
  }
};

export default getRelease;
