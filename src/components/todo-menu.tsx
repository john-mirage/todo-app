import TodoFilter from "@containers/todo-filter"
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "@constants/todo-filters";

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

function TodoMenu({ completedCount, activeCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? 'item' : 'items'

  return (
    <div className="flex flex-row justify-center items-center w-full h-14 px-5">
      <div className="flex-1">
        <p className="text-sm font-normal text-light-textSecondary dark:text-dark-textSecondary">{activeCount || 'No'} {itemWord} left</p>
      </div>
      <div className="flex-1 hidden lg:block">
        <div className="flex flex-row justify-center items-center w-full h-auto">
          {Object.keys(FILTER_TITLES).map(filter =>
            <TodoFilter key={filter} filter={filter}>
              {FILTER_TITLES[filter]}
            </TodoFilter>
          )}
        </div>
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