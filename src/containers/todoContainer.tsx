import { connect } from 'react-redux';
import ActiveTodoList from '../components/ActiveTodoList';

const mapStateToProps = (state: any) => ({
  todoData: state.todoList,
});

const mapDispatchToProps = (dispatch: any) => {
  return console.log('dispatch', dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTodoList);
