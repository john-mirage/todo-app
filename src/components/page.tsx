import TopAppBar from "@components/top-app-bar";
import TodoInput from "@containers/todo-input";
import TodoList from "@containers/todo-list";
import {useEffect, useState} from "react";
import Background from "@components/background";
import classes from "@assets/styles/components/page.module.css";
import Container from "@components/container";
import Foreground from "@components/foreground";
import TodoFilters from "@components/todo-filters";
import Tip from "@components/tip";

function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
      }
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
        <Foreground mobile>
          <TodoFilters/>
        </Foreground>
        <Tip/>
      </Container>
    </div>
  );
}

export default Page;
