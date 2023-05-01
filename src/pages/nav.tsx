import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string,
    time? : number
    clickable?: boolean
    changeSound?: () => void;
    changeSecondSound?: () => void;
    changeSFX?: () => void;
};

const Nav: FC<Props> = ({ children, path, time, clickable = true, changeSound, changeSecondSound, changeSFX }) => {

    const navigate = useNavigate()

    const onClick = () => {
        if (clickable) {
            changeSound && changeSound()
            changeSecondSound && changeSecondSound()
            changeSFX && changeSFX()
            navigate(path)
        }
    }

    useEffect(() => {
        if (time) {
            setTimeout(() => {
                navigate(path)
            }, time)
        }
    }, [])

    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}

export default Nav