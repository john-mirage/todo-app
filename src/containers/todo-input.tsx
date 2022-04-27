import { connect } from "react-redux";
import TodoInput from "@components/todo-input";
import { getCompletedTodoCount } from "@selectors/selectors";
import {ActionCreator, bindActionCreators} from "redux";
import * as TodoActions from "@actions/index";

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions as ActionCreator<unknown>, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)