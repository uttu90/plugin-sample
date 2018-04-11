import { combineReducers } from 'redux';
import noteReducer from './note';
import commentReducer from './comment';

const dataReducer = combineReducers({
  comments: commentReducer,
  notes: noteReducer
})

export default dataReducer;