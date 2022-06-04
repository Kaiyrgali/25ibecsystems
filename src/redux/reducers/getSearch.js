const getSearch = (state = '', action) => {
  switch (action.type) {
    case 'ADD_SEARCH_TEXT':
      return action.action;
    default:
      return state.search;
  }
};

export default getSearch;
