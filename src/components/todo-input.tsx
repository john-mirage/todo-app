function TodoInput() {
    return (
        <div className="flex flex-row items-center w-full h-12 px-5">
            <input
                className="flex-1 order-2 py-2 px-5 outline-none transition-colors text-light-primaryText dark:text-dark-primaryText bg-light-foreground dark:bg-dark-foreground placeholder:text-light-secondaryText dark:placeholder:text-dark-secondaryText"
                type="text"
                placeholder="Create a new todo..."
            />
            <button className="order-1 flex-shrink-0 flex-grow-0 w-7 h-7 rounded-full bg-blue"></button>
        </div>
    )
}

export default TodoInput