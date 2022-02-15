function TodoFilter() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto">
            <button className="text-base font-bold text-blue mr-5 transition-colors">All</button>
            <button className="text-base font-bold text-light-secondaryText dark:text-dark-secondaryText mr-5 transition-colors hover:text-light-primaryText last:mr-0 dark:hover:text-dark-primaryText">Active</button>
            <button className="text-base font-bold text-light-secondaryText dark:text-dark-secondaryText mr-5 transition-colors hover:text-light-primaryText last:mr-0 dark:hover:text-dark-primaryText">Completed</button>
        </div>
    )
}

export default TodoFilter