import getSearch from './getSearch';
import getRating from './getRating';
import getRelease from './getRelease';
import getPlatform from './getPlatform';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      search: getSearch(state, action),
      rating: getRating(state, action),
      release: getRelease(state, action),
      platform: getPlatform(state, action),
    }
  );
};

export default reducer;
