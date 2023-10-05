import { Button as ButtonUI } from "@mui/material"
const Button = ({ label, iconURL, bgColor, borderColor, textColor, fullWidth }) => {
    return (
        <ButtonUI
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none ${bgColor || 'bg-coral-red'} ${textColor || 'text-white'} ${borderColor && 'border border-solid border-coral-red'} ${fullWidth && "w-full"} ${bgColor || 'hover:bg-hover-red active:bg-active-red'}`}
        >
            {label}
            {iconURL}
        </ButtonUI>
    )
}

export default Button
