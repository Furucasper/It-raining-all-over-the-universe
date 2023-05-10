import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string
    delay?: number
    isClosing?: boolean
    duration?: 5 | 6 | 8 | 10 | 12 | 14 | 15 | 16 | 18 | 20 | 22
};

const Curtain: FC<Props> = ({ children, path, delay = 0, isClosing = true, duration = 22 }) => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(path)
        }, ((duration * 1000) + 1000) + delay)
    }, [])

    return (
        <div className="flex justify-center font-season h-full">
            <div className={"bg-black w-full absolute top-0 left-0 overlay" + (isClosing ? " curtain-closing fromstart" : "  curtain-opening fromend") + ` ani-duration-${duration}s`}></div>
            <div className={"bg-black w-full absolute bottom-0 left-0 overlay" + (isClosing ? " curtain-closing fromstart" : "  curtain-opening fromend") + ` ani-duration-${duration}s`}></div>
            {children}
        </div>
    );
};

export default Curtain;
