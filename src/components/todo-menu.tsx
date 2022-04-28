import TodoFilters from "@components/todo-filters";
import classes from "@assets/styles/components/todo-menu.module.css";
import classNames from "classnames";

function TodoMenu({ completedCount, activeCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <div className={classes.TodoMenu}>
      <div className={classes.TodoMenu__section}>
        <p className={classes.TodoMenu__remaining}>{activeCount || 'No'} {itemWord} left</p>
      </div>
      <div className={classNames(classes.TodoMenu__section, classes.TodoMenu__section_middle)}>
        <TodoFilters/>
      </div>
      <div className={classes.TodoMenu__section}>
        {
          !!completedCount &&
          <button onClick={onClearCompleted} className={classes.TodoMenu__clear}>Clear Completed</button>
        }
      </div>
    </div>
  )
}

export default TodoMenu;