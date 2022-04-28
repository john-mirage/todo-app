import classes from "@assets/styles/components/check-input.module.css";

function CheckInput({ id, checked, onChange, onClick, readOnly }) {
    return (
        <>
            <input
              className={classes.input}
              type="checkbox"
              id={id}
              name={id}
              checked={checked}
              onChange={onChange}
              readOnly={readOnly}
            />
            <label
              className={classes.label}
              htmlFor={id}
              onClick={onClick}
            >
                <span className={classes.button}>
                    <span className={classes.circle}>
                        <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9">
                          <path fill="none" stroke="currentColor" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                        </svg>
                        <span className={classes.overlay}></span>
                    </span>
                </span>
            </label>
        </>
    )
}

export default CheckInput;