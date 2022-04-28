import classNames from "classnames";
import classes from "@assets/styles/components/todo-filter.module.css";

function TodoFilter({active, children, setFilter}) {
  const activeClassNames = classNames([
    classes.todoFilter,
    {
      [classes.todoFilter_active]: active,
      [classes.todoFilter_inactive]: !active,
    }
  ]);

  return (
    <button className={activeClassNames} onClick={setFilter}>
      {children}
    </button>
  )
}

export default TodoFilter;