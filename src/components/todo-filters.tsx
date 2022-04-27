import TodoFilter from "@containers/todo-filter";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "@constants/todo-filters";

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

function TodoFilters() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-auto">
      {Object.keys(FILTER_TITLES).map(filter =>
        <TodoFilter key={filter} filter={filter}>
          {FILTER_TITLES[filter]}
        </TodoFilter>
      )}
    </div>
  );
}

export default TodoFilters;