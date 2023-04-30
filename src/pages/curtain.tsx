import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: string | JSX.Element | JSX.Element[]
    path: string
    delay?: number
    bgColor?: 'black' | 'white' | ''
};

const Curtain: FC<Props> = ({ children, path, bgColor = '' }) => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/darkness')
        }, 23500)
    }, [])

    return (
        <div className="flex justify-center font-season h-full">
            <div className="bg-black w-full absolute top-0 left-0 overlay curtain-closing fromstart"></div>
            <div className="bg-black w-full absolute bottom-0 left-0 overlay curtain-closing fromstart"></div>
            {children}
        </div>
    );
};

export default Curtain;
