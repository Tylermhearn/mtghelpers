import { combineReducers } from "redux";
import { reducer as asyncops } from '../utils/legacyAsyncOpsAdapter'
import cardsReducer from './cards'


const rootReducer = combineReducers({
  asyncops,
  cardsReducer
});

export default rootReducer;
