import CheckInput from "@components/check-input";
import classes from "@assets/styles/components/todo.module.css";

function Todo({id, todo, completeTodo, deleteTodo}) {

  function handleTodoCompletion() {
    completeTodo(todo.id);
  }

  function handleTodoDeletion() {
    deleteTodo(todo.id);
  }

  return (
    <li className={classes.container}>
      <CheckInput
        id={id}
        checked={todo.completed}
        onChange={handleTodoCompletion}
      />
      <p className={classes.content}>{todo.text}</p>
      <button className={classes.button} onClick={handleTodoDeletion}>
        <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </button>
    </li>
  )
}

export default Todo