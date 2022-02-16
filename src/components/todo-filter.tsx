function TodoFilter() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto">
            <button className="text-base font-bold text-blue mr-5 transition-colors">All</button>
            <button className="text-base font-bold text-light-textSecondary dark:text-dark-textSecondary mr-5 transition-colors hover:text-light-textPrimary last:mr-0 dark:hover:text-dark-textPrimary">Active</button>
            <button className="text-base font-bold text-light-textSecondary dark:text-dark-textSecondary mr-5 transition-colors hover:text-light-textPrimary last:mr-0 dark:hover:text-dark-textPrimary">Completed</button>
        </div>
    )
}

export default TodoFilter