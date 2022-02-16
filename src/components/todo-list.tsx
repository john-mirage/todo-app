import Todo from "@components/todo"
import TodoMenu from "@components/todo-menu"

function TodoList() {
    return (
        <>
            <div className="w-full h-auto">
                <Todo id="check-id-1" label="Complete online JavaScript course" />
                <Todo id="check-id-2" label="Jog around the park 3x" />
                <Todo id="check-id-3" label="10 minutes meditation" />
                <Todo id="check-id-4" label="Read for 1 hour" />
                <Todo id="check-id-5" label="Pick up groceries" />
                <Todo id="check-id-6" label="Complete Todo App on Frontend Mentor" />
            </div>

            <div className="border-t border-light-todoList dark:border-dark-todoList bg-light-foreground dark:bg-dark-foreground">
                <TodoMenu />
            </div>
        </>
    )
}

export default TodoList