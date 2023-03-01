import { combineReducers } from 'redux';

import { viewsSlice } from './slices/menu';

const reducer = combineReducers({
  views: viewsSlice.reducer
});

export default reducer;
