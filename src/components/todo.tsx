interface Props {
    label: string;
}

function Todo({ label }: Props) {
    return (
        <div className="flex flex-row justify-between items-center w-full h-16 bg-light-foreground dark:bg-dark-foreground px-5 mb-px last:mb-0">
            <p className="text-sm font-normal text-light-textPrimary dark:text-dark-textPrimary">{label}</p>
        </div>
    )
}

export default Todo