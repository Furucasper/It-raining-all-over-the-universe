import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string,
    time? : number
    clickable?: boolean
};

const Nav: FC<Props> = ({ children, path, time, clickable = true }) => {

    const navigate = useNavigate()

    const onClick = () => {
        if (clickable) {
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