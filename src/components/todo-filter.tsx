function TodoFilter() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto">
            <button className="text-base font-bold text-light-secondaryText dark:text-dark-secondaryText mr-5 transition-colors hover:text-blue last:mr-0 dark:hover:text-blue">All</button>
            <button className="text-base font-bold text-light-secondaryText dark:text-dark-secondaryText mr-5 transition-colors hover:text-blue last:mr-0 dark:hover:text-blue">Active</button>
            <button className="text-base font-bold text-light-secondaryText dark:text-dark-secondaryText mr-5 transition-colors hover:text-blue last:mr-0 dark:hover:text-blue">Completed</button>
        </div>
    )
}

export default TodoFilter