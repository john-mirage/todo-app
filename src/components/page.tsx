import TopAppBar from "@components/top-app-bar"
import TodoInput from "@containers/todo-input"
import TodoList from "@containers/todo-list"
import {useEffect, useState} from "react"
import Background from "@components/background";
import classes from "@assets/styles/components/page.module.css";
import Container from "@components/container";
import Foreground from "@components/foreground";
import TodoFilters from "@components/todo-filters";
import Tip from "@components/tip";

function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html?.classList.add('dark');
    } else {
      if (html?.classList.contains('dark')) html?.classList.remove('dark');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={classes.page}>
      <TopAppBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Background isDarkMode={isDarkMode}/>
      <Container>
        <Foreground margin>
          <TodoInput/>
        </Foreground>
        <Foreground margin>
          <TodoList/>
        </Foreground>
        <Foreground>
          <TodoFilters/>
        </Foreground>
        <Tip/>
      </Container>
    </div>
  );
}

export default Page;
