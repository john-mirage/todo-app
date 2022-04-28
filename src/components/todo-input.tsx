import CheckInput from "@components/check-input"
import {useState} from "react";
import classes from "@assets/styles/components/todo-input.module.css";

function TodoInput({actions, todosCount, completedCount}) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    const userInput = event.target.value.trim();
    if (event.key === "Enter") {
      if (userInput.length > 0) {
        actions.addTodo(userInput);
      }
      setText("");
    }
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className={classes.container}>
      <CheckInput
        className="-ml-2"
        id="check-all-input"
        checked={completedCount === todosCount}
        onClick={actions.completeAllTodos}
        readOnly
      />
      <input
        onChange={handleChange}
        onKeyDown={handleSubmit}
        value={text}
        className={classes.input}
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  )
}

export default TodoInput