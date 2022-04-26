import CheckInput from "@components/check-input"
import {useState} from "react";

function TodoInput({addTodo, todosCount, completedCount, onSave}) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    const userInput = event.target.value.trim()
    if (event.key === "Enter") {
      if (userInput.length > 0) {
        addTodo(userInput)
      }
      setText("")
    }
  }

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div className="flex flex-row items-center w-full h-16 px-5">
      <CheckInput className="-ml-2" id="check-all-input"/>
      <input
        onChange={handleChange}
        onKeyDown={handleSubmit}
        value={text}
        className="flex-1 py-2 px-5 outline-none transition-colors text-light-textPrimary dark:text-dark-textPrimary bg-light-foreground dark:bg-dark-foreground placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  )
}

export default TodoInput