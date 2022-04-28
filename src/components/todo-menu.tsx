import TodoFilters from "@components/todo-filters";
import classes from "@assets/styles/components/todo-menu.module.css";
import classNames from "classnames";

function TodoMenu({ completedCount, activeCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <p className={classes.todoLeft}>{activeCount || 'No'} {itemWord} left</p>
      </div>
      <div className={classNames(classes.section, classes.middle)}>
        <TodoFilters/>
      </div>
      <div className={classes.section}>
        {
          !!completedCount &&
          <button onClick={onClearCompleted} className={classes.clearTodos}>Clear Completed</button>
        }
      </div>
    </div>
  )
}

export default TodoMenu;