import classes from "@assets/styles/components/foreground.module.css";
import classNames from "classnames";

function Foreground({ children, margin, mobile }) {
  const activeClasses = classNames([
    classes.foreground,
    {
      [classes.margin]: margin,
      [classes.mobile]: mobile,
    }
  ]);

  return (
    <div className={activeClasses}>
      { children }
    </div>
  );
}

export default Foreground;