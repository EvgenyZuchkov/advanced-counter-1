type ButtonProps = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({title, onClick, disabled}: ButtonProps) => {


    return (
        <button onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}