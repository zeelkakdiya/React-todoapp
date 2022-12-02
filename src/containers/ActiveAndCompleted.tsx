import { connect } from 'react-redux';
import ActiveTodoList from '../components/ActiveTodoList';
import CompletedTodoList from '../components/CompletedTodoList';
import { activeTodo, addTodo, removeTodo } from '../services/Actions/Actions';

const mapStateToProps = (state: any) => ({
  todoData: state,
});

const mapDispatchToProps = (dispatch: any) => {
  addTodoHandler: (data: any) => dispatch(addTodo());
  removeTodoHandler: (data: any) => dispatch(removeTodo(data.id));
};

const activeTodoProps = (dispatch: any) => {
  activeTodoListHandler: (data: any) => dispatch(activeTodo(data));
  notCompletTodoListHandler: (data: any) => dispatch(CompletedTodoList(data));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // activeTodoProps
)(ActiveTodoList);
