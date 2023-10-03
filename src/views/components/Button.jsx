const Button = ({ label, iconURL, bgColor, borderColor, textColor, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none ${bgColor || 'bg-coral-red'} ${textColor || 'text-white'} ${borderColor && 'border-coral-red'} ${fullWidth && "full-w"} `}
        >
            {label}
            {iconURL && <img
                src={iconURL}
                alt={label}
                className='ml-2 rounded-full'
            />}
        </button>
    )
}

export default Button
