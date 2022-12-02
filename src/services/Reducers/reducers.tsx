import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../../utils/constants';

const initialState = {
  todo: [],
};

export function todoList(state = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { todoData: action.state }];

    case REMOVE_TODO:
      state.pop();

      return [...state];

    default:
      return state;
  }
}

export function todoAdd(updateState = [], action: any) {
  switch (action.type) {
    case UPDATE_TODO:
      return [...updateState, { todoUpdate: action.state }];

    default:
      return updateState;
  }
}
