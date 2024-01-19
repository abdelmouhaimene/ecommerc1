import { Button as ButtonUI } from "@mui/material"
const SmallButtonIcon = ({ label, iconURL, action }) => {
    return (
        <ButtonUI
            className={`hidden sm:flex  justify-between items-center gap-1 px-2 py-1 font-montserrat text-lg rounded-full leading-none hover:bg-gray-100 text-coral-red border border-solid border-coral-red `}
            onClick={action}
        >
            {label}
            {iconURL}
        </ButtonUI>
    )
}

export default SmallButtonIcon