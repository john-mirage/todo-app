import Switch from "@components/switch";
import classes from "@assets/styles/components/todo.module.css";
import classNames from "classnames";

function Todo({id, todo, completeTodo, deleteTodo}) {
  const todoContentClasses = classNames([
    classes.content,
    {
      [classes.completed]: todo.completed,
    }
  ]);

  function handleTodoCompletion() {
    completeTodo(todo.id);
  }

  function handleTodoDeletion() {
    deleteTodo(todo.id);
  }

  return (
    <li className={classes.container}>
      <div className={classes.fixedSection}>
        <Switch
          id={id}
          checked={todo.completed}
          onChange={handleTodoCompletion}
        />
      </div>
      <div className={classes.fluidSection}>
        <p className={todoContentClasses}>{todo.text}</p>
      </div>
      <div className={classes.fixedSection}>
        <button className={classes.button} onClick={handleTodoDeletion}>
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
          </svg>
        </button>
      </div>
    </li>
  )
}

export default Todo