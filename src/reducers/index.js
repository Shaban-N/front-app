import { combineReducers } from 'redux';
import news from './news';
import filters from './filterReducer';

const rootReducer = combineReducers({
  news,
  filters
});
export default rootReducer;