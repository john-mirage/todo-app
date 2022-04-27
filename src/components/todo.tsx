import CheckInput from "@components/check-input"
import IconButton from "@components/icon-button"
import CrossIcon from "@components/cross-icon"

interface Props {
  id: string;
  todo: {
    text: string;
    completed: boolean;
    id: number;
  }
}

function Todo({id, todo, completeTodo, deleteTodo}: Props) {

  function handleTodoCompletion() {
    completeTodo(todo.id)
  }

  function handleTodoDeletion() {
    deleteTodo(todo.id)
  }

  return (
    <div
      className="cd-todo cursor-grab flex flex-row items-center w-full h-16 bg-light-foreground dark:bg-dark-foreground px-5 mb-px last:mb-0">
      <CheckInput id={id} className="-ml-2" checked={todo.completed} onChange={handleTodoCompletion}/>
      <p
        className="cd-todo-content text-sm font-normal text-light-textPrimary dark:text-dark-textPrimary ml-5">{todo.text}</p>
      <IconButton className="cd-cross-button ml-auto -mr-4" onClick={handleTodoDeletion}>
        <CrossIcon
          className="cd-cross-icon w-4 h-4 stroke-light-textSecondary dark:stroke-dark-textSecondary hover:stroke-light-textPrimary hover:dark:stroke-dark-textPrimary lg:opacity-0 lg:transition-opacity"/>
      </IconButton>
    </div>
  )
}

export default Todo