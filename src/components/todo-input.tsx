import CheckInput from "@components/check-input"

function TodoInput() {
    return (
        <div className="flex flex-row items-center w-full h-16 px-5">
            <CheckInput className="-ml-2" />
            <input
                className="flex-1 py-2 px-5 outline-none transition-colors text-light-textPrimary dark:text-dark-textPrimary bg-light-foreground dark:bg-dark-foreground placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary"
                type="text"
                placeholder="Create a new todo..."
            />
        </div>
    )
}

export default TodoInput