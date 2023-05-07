import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string,
    time?: number
    clickable?: boolean
    delayClick?: number
    delay?: number
    changeSound?: () => void;
    changeSecondSound?: () => void;
    changeSFX?: () => void;
};

const Nav: FC<Props> = ({ children, path, time, delay, clickable = true, delayClick, changeSound, changeSecondSound, changeSFX }) => {

    const navigate = useNavigate()

    const [active, setActive] = useState(true)

    const onClick = () => {
        if (clickable && active) {
            setTimeout(() => {
                changeSound && changeSound()
                changeSecondSound && changeSecondSound()
                changeSFX && changeSFX()
                navigate(path)
            }, delay || 0)
        }
    }

    useEffect(() => {
        if (time) {
            setTimeout(() => {
                navigate(path)
            }, time)
        }
        if (delayClick) {
            setActive(false)
            setTimeout(() => {
                setActive(true)
            }, delayClick)
        }
    }, [])

    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}

export default Nav