import classNames from "classnames";
import classes from "@assets/styles/components/icon-button.module.css";

function IconButton({children, onClick, margin}) {
  const activeClassNames = classNames([
    classes.button,
    {
      [classes.margin]: margin,
    }
  ]);

  return (
    <button
      className={activeClassNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;