import TodoMenu from "@components/todo-menu"

function TodoList() {
    return (
        <>
            <div className="border-t border-light-todoList dark:border-dark-todoList bg-light-foreground dark:bg-dark-foreground">
                <TodoMenu />
            </div>
        </>
    )
}

export default TodoList