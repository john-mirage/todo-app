import CheckIcon from "@components/check-icon"

function CheckInput({ className, id, checked, onChange }) {
    return (
        <>
            <input className="cd-check-input hidden" type="checkbox" id={id} name={id} checked={checked} onChange={onChange} />
            <label className={`cd-check-label block w-auto h-auto ${className}`} htmlFor={id}>
                <div className="cd-check-button flex w-12 h-12 rounded-full cursor-pointer">
                    <div className="cd-check-circle flex w-7 h-7 m-auto rounded-full transition-colors bg-light-todoList dark:bg-dark-todoList">
                        <CheckIcon className="cd-check-icon hidden w-3 h-3 m-auto stroke-white" />
                        <div className="cd-check-overlay w-6 h-6 m-auto rounded-full bg-light-foreground dark:bg-dark-foreground"></div>
                    </div>
                </div>
            </label>
        </>
    )
}

export default CheckInput