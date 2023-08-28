
const Button = ({design,icon,text,...rest}) => {
    return (
        <>
        <button {...rest} className={design}>
            {icon}
            {text}
        </button>
        </>
    )
}

export default Button;