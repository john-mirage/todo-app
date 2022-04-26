import { connect } from "react-redux";
import TodoInput from "@components/todo-input";
import { addTodo } from "@actions/index";
import { getCompletedTodoCount } from "@selectors/selectors";

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

export default connect(mapStateToProps, { addTodo })(TodoInput)