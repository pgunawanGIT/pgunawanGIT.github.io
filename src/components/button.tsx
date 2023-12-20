import { ReactEventHandler } from "react"

type propsEl = {
    children: string,
    className: string,
    onClick?: ReactEventHandler<HTMLButtonElement>,

}
export const Button =
    (
        {
            children,
            onClick,
            className,
        }: propsEl

    ) => {
        return (
            <button

                className={className}
                onClick={onClick}
            >{children}
            </button>
        )
    }

