import cn from "classnames";
import { FC } from "react";
import styles from "./styles/index.module.scss"

interface IButton {
    children: any,
    onClick?: any, 
    variant?: 'transparent' | 'more',
    className?: any,
}

const Button: FC<IButton> = ({ children, className, variant = 'transparent', onClick }) => {
    return (
        <button onClick={onClick} className={cn(className, styles[variant])}>
            {children}
        </button>
    )
}

export default Button;