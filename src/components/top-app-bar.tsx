import classes from "@assets/styles/components/top-app-bar.module.css";
import IconButton from "@components/icon-button"
import Container from "@components/container";
import Icon from "@components/icon";

function TopAppBar({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={classes.bar}>
      <Container>
        <h2 className={classes.title}>todo</h2>
        <IconButton margin onClick={toggleDarkMode}>
          <Icon name={isDarkMode ? "sun" : "moon"}/>
        </IconButton>
      </Container>
    </header>
  );
}

export default TopAppBar;