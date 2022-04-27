import classes from "@assets/styles/components/foreground.module.css";
import classNames from "classnames";

function Foreground({ children, margin }) {
  const activeClasses = classNames([
    classes.foreground,
    {
      [classes.margin]: margin,
    }
  ]);

  return (
    <div className={activeClasses}>
      { children }
    </div>
  );
}

export default Foreground;