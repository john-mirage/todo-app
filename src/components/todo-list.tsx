import Todo from "@components/todo"
import TodoMenu from "@components/todo-menu"

function TodoList() {
    return (
        <>
            <div className="w-full h-auto">
                <Todo label="Complete online JavaScript course" />
                <Todo label="Jog around the park 3x" />
                <Todo label="10 minutes meditation" />
                <Todo label="Read for 1 hour" />
                <Todo label="Pick up groceries" />
                <Todo label="Complete Todo App on Frontend Mentor" />
            </div>

            <div className="border-t border-light-todoList dark:border-dark-todoList bg-light-foreground dark:bg-dark-foreground">
                <TodoMenu />
            </div>
        </>
    )
}

export default TodoList