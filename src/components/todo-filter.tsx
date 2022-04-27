

function TodoFilter({active, children, setFilter}) {
  return (
    <button
      className={`text-base font-bold mr-5 last:mr-0 ${active ? "text-blue" : "text-light-textSecondary dark:text-dark-textSecondary transition-colors hover:text-light-textPrimary dark:hover:text-dark-textPrimary"}`}
      onClick={setFilter}
    >
      {children}
    </button>
  )
}

export default TodoFilter;