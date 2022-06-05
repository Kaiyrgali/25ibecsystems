const getPlatform = (state = false, action) => {
  switch (action.type) {
    case 'ADD_FILTER_PLATFORM':
      return action.action;
    default:
      return state.platform;
  }
};

export default getPlatform;
