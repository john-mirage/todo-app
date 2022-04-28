import Todo from "@components/todo";
import TodoMenu from "@components/todo-menu";
import classes from "@assets/styles/components/todo-list.module.css";

function TodoList({filteredTodos, todosCount, completedCount, actions}) {
  return (
    <>
      {
        filteredTodos.length > 0 &&
        <ul className={classes.list}>
          {filteredTodos.map((todo, index) => (
            <Todo
              key={index}
              id={`check-id-${index}`}
              todo={todo}
              {...actions}
            />
          ))}
        </ul>
      }
      <TodoMenu
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    </>
  );
}

export default TodoList;