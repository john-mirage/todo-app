import IconButton from "@components/icon-button"
import SunIcon from "@components/sun-icon"
import MoonIcon from "@components/moon-icon"

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: any;
}

function TopAppBar({ isDarkMode, setIsDarkMode }: Props) {
    return (
        <header className="absolute z-50 top-0 left-0 flex w-full h-20 lg:h-40">
            <div className="flex flex-row justify-between items-center w-full h-auto mt-auto px-5 md:w-[45rem] md:mx-auto md:px-0">
                <h2 className="text-3xl font-bold tracking-widest uppercase text-white">todo</h2>
                <IconButton className="-mr-3" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode
                        ? <SunIcon className="w-6 h-6 fill-white" />
                        : <MoonIcon className="w-6 h-6 fill-white" />
                    }
                </IconButton>
            </div>
        </header>
    )
}

export default TopAppBar