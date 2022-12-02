import { todoList, todoAdd } from './reducers';
import { combineReducers } from 'redux';

export default combineReducers({
  todoList,
  todoAdd,
});
