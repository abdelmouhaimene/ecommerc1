import { IconButton } from "@mui/material"

const ButtonIcon = ({ icon, textColor, bgColor, action }) => {
    return (
        <IconButton
            className={`${bgColor || 'bg-coral-red'} ${textColor || 'text-white'} ${bgColor || 'hover:bg-hover-red active:bg-active-red'} `}
            onClick={action}
        >
            {icon}
        </IconButton>
    )
}

export default ButtonIcon
