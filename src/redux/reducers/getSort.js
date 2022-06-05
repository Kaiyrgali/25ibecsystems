const getSort = (state = '', action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return action.action;
    default:
      return state.sort;
  }
};

export default getSort;
