import CheckInput from "@components/check-input"
import IconButton from "@components/icon-button"
import CrossIcon from "@components/cross-icon"

interface Props {
    label: string;
}

function Todo({ label }: Props) {
    return (
        <div className="flex flex-row items-center w-full h-16 bg-light-foreground dark:bg-dark-foreground px-5 mb-px last:mb-0">
            <CheckInput className="-ml-2"/>
            <p className="text-sm font-normal text-light-textPrimary dark:text-dark-textPrimary ml-5">{label}</p>
            <IconButton className="ml-auto -mr-4">
                <CrossIcon className="w-4 h-4 stroke-light-textSecondary dark:stroke-dark-textSecondary" />
            </IconButton>
        </div>
    )
}

export default Todo