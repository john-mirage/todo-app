import {connect} from 'react-redux'
import {ActionCreator, bindActionCreators} from 'redux'
import * as TodoActions from '@actions/index';
import TodoList from "@components/todo-list";
import {getVisibleTodos} from "@selectors/selectors";

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions as ActionCreator<unknown>, dispatch)
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList