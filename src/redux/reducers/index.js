import getSearch from './getSearch';
import getSort from './getSort';
import getPlatform from './getPlatform';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      search: getSearch(state, action),
      sort: getSort(state, action),
      platform: getPlatform(state, action),
    }
  );
};

export default reducer;
