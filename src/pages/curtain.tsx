import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string
    delay?: number
    bgColor?: 'black' | 'white' | ''
    isClosing?: boolean
};

const Curtain: FC<Props> = ({ children, path, bgColor = '', isClosing = true }) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (isClosing) {
            setTimeout(() => {
                navigate(path)
            }, 23500)
        } else {
            setTimeout(() => {
                navigate(path)
            }
        , 10000)
        }
    }, [])

    return (
        <div className="flex justify-center font-season h-full">
            <div className={"bg-black w-full absolute top-0 left-0 overlay" + (isClosing ? " curtain-closing fromstart" : "  curtain-opening fromend")}></div>
            <div className={"bg-black w-full absolute bottom-0 left-0 overlay" + (isClosing ? " curtain-closing fromstart" : "  curtain-opening fromend")}></div>
            {children}
        </div>
    );
};

export default Curtain;
