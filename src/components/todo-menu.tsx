import TodoFilter from "@components/todo-filter"

function TodoMenu({ completedCount, activeCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? 'item' : 'items'

  return (
    <div className="flex flex-row justify-center items-center w-full h-14 px-5">
      <div className="flex-1">
        <p className="text-sm font-normal text-light-textSecondary dark:text-dark-textSecondary">{activeCount || 'No'} {itemWord} left</p>
      </div>
      <div className="flex-1 hidden lg:block">
        <TodoFilter/>
      </div>
      <div className="flex-1">
        {
          !!completedCount &&
          <button
            onClick={onClearCompleted}
            className="block ml-auto text-sm font-normal transition-colors text-light-textSecondary hover:text-light-textPrimary dark:text-dark-textSecondary dark:hover:text-dark-textPrimary"
          >Clear Completed</button>
        }
      </div>
    </div>
  )
}

export default TodoMenu