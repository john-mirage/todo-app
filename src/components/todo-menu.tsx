import TodoFilter from "@components/todo-filter"

function TodoMenu() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto py-6 px-5">

            <div className="flex-1">
                <p className="text-sm font-normal text-light-secondaryText dark:text-dark-secondaryText">5 items left</p>
            </div>

            <div className="flex-1 hidden lg:block">
                <TodoFilter />
            </div>

            <div className="flex-1">
                <button className="block ml-auto text-sm font-normal text-light-secondaryText dark:text-dark-secondaryText">Clear Completed</button>
            </div>

        </div>
    )
}

export default TodoMenu