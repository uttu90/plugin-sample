import { combineReducers } from 'redux';
import componentReducer from './components';
import dataReducer from './data';

const reducer = combineReducers({
  components: componentReducer,
  data: dataReducer
});

export default reducer;