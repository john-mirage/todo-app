import CheckInput from "@components/check-input"
import IconButton from "@components/icon-button"
import CrossIcon from "@components/cross-icon"

interface Props {
    label: string;
    id: string;
}

function Todo({ label, id }: Props) {
    return (
        <div className="cd-todo cursor-grab flex flex-row items-center w-full h-16 bg-light-foreground dark:bg-dark-foreground px-5 mb-px last:mb-0">
            <CheckInput id={id} className="-ml-2"/>
            <p className="cd-todo-content text-sm font-normal text-light-textPrimary dark:text-dark-textPrimary ml-5">{label}</p>
            <IconButton className="cd-cross-button ml-auto -mr-4">
                <CrossIcon className="cd-cross-icon w-4 h-4 stroke-light-textSecondary dark:stroke-dark-textSecondary lg:opacity-0 lg:transition-opacity" />
            </IconButton>
        </div>
    )
}

export default Todo