import Todo from "@components/todo"
import TodoMenu from "@components/todo-menu"

function TodoList({filteredTodos, todosCount, completedCount, actions}) {
  return (
    <>
      <div className="w-full h-auto">
        {filteredTodos.map((todo, index) => (
          <Todo key={index} id={`check-id-${index}`} todo={todo} {...actions}/>
        ))}
      </div>

      <div className="border-t border-light-todoList dark:border-dark-todoList bg-light-foreground dark:bg-dark-foreground">
        <TodoMenu
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      </div>
    </>
  )
}

export default TodoList