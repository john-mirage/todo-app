import classNames from "classnames";
import classes from "@assets/styles/components/todo-filter.module.css";

function TodoFilter({active, children, setFilter}) {
  const activeClassNames = classNames([
    classes.filter,
    {
      [classes.active]: active,
      [classes.inactive]: !active,
    }
  ]);

  return (
    <button className={activeClassNames} onClick={setFilter}>
      {children}
    </button>
  )
}

export default TodoFilter;