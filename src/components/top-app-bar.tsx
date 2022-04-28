import classes from "@assets/styles/components/top-app-bar.module.css";
import IconButton from "@components/icon-button";
import Container from "@components/container";
import ThemeIcon from "@components/theme-icon";

function TopAppBar({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={classes.bar}>
      <Container flex>
        <h2 className={classes.title}>todo</h2>
        <IconButton margin onClick={toggleDarkMode}>
          <ThemeIcon name={isDarkMode ? "sun" : "moon"}/>
        </IconButton>
      </Container>
    </header>
  );
}

export default TopAppBar;