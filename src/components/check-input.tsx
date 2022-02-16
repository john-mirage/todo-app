import IconButton from "@components/icon-button"
import CheckCircle from "@components/check-circle"
import CheckIcon from "@components/check-icon"

function CheckInput({ className }) {
    return (
        <>
            <label className={`block w-auto h-auto ${className}`} htmlFor="check-input">
                <IconButton>
                    <CheckCircle className="flex w-7 h-7 rounded-full bg-gradient-to-br from-blue to-pink">
                        <CheckIcon className="w-3 h-3 m-auto stroke-white" />
                    </CheckCircle>
                </IconButton>
            </label>
            <input className="hidden" type="checkbox" id="check-input" name="check-input" />
        </>
    )
}

export default CheckInput