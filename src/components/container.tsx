import classes from "@assets/styles/components/container.module.css";

function Container({ children }) {
  return (
    <main className={classes.container}>
      { children }
    </main>
  );
}

export default Container;