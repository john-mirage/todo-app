import IconButton from "@components/icon-button"

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: any;
}

function TopAppBar({ isDarkMode, setIsDarkMode }: Props) {
    return (
        <header className="absolute z-50 top-0 left-0 flex w-full h-20">
            <div className="flex flex-row justify-between items-center w-full h-auto mt-auto px-5 md:w-desktopTodo md:mx-auto md:px-0">
                <h2 className="text-3xl font-bold tracking-widest uppercase text-white">todo</h2>
                <IconButton action={() => setIsDarkMode(!isDarkMode)}>

                </IconButton>
            </div>
        </header>
    )
}

export default TopAppBar