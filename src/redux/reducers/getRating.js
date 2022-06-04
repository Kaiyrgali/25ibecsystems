const getRating = (state = '', action) => {
  switch (action.type) {
    case 'ADD_FILTER_RATING':
      return action.action;
    default:
      return state.rating;
  }
};

export default getRating;
