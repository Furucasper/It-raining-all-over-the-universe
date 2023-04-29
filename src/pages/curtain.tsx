import { FC } from "react";

interface Props {
    children: string | JSX.Element | JSX.Element[]
    delay?: number
};

const Curtain: FC<Props> = ({ children }) => {
    return (
        <div className="flex justify-center font-season bg-black h-full">
            <div className="bg-black w-full absolute top-0 left-0 overlay curtain-closing fromstart"></div>
            <div className="bg-black w-full absolute bottom-0 left-0 overlay curtain-closing fromstart"></div>
            <div className="w-full h-screen bg-white" style={{ /* clipPath: `polygon(0 ${100 - (closingPercentage/2)}%, 100% ${100 - (closingPercentage/2)}%, 100% ${closingPercentage/2}%, 0 ${closingPercentage/2}%)` */ }}>
                {children}
            </div>
        </div>
    );
};

export default Curtain;
