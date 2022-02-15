import TopAppBar from "@components/top-app-bar"
import TodoInput from "@components/todo-input"
import TodoList from "@components/todo-list"
import TodoFilter from "@components/todo-filter"
import { useEffect, useState } from "react"

function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const html = document.documentElement
        if (isDarkMode) {
            html?.classList.add('dark')
        } else {
            if (html?.classList.contains('dark')) html?.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <div className="relative w-full min-h-screen pt-24 pb-20 transition-colors bg-light-background dark:bg-dark-background">
            
            <TopAppBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <div className="absolute z-40 top-0 left-0 w-full h-52 bg-mobile-light-bg dark:bg-mobile-dark-bg bg-no-repeat bg-cover"></div>

            <main className="relative z-50 w-full h-auto px-5 md:w-desktopTodo md:mx-auto md:px-0">

                <div className="w-full h-auto rounded-md overflow-hidden transition-colors shadow-xl mb-5 bg-light-foreground dark:bg-dark-foreground">
                    <TodoInput />
                </div>

                <div className="w-full h-auto rounded-md overflow-hidden transition-colors shadow-xl mb-5 bg-light-todoList dark:bg-dark-todoList">
                    <TodoList />
                </div>

                <div className="w-full h-auto rounded-md overflow-hidden transition-colors shadow-xl mb-5 bg-light-foreground dark:bg-dark-foreground py-5 lg:hidden">
                    <TodoFilter />
                </div>

                <p className="w-full h-auto mt-12 text-center text-sm font-bold text-light-secondaryText dark:text-dark-secondaryText">Drag and drop to reorder list</p>

            </main>

        </div>
    )
}

export default Page
