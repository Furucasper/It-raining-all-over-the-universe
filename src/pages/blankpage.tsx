import { FC } from 'react'

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string
    onBlack?: boolean;
    fadeInScene?: boolean;
    fadeout?: boolean;
}

const BlankPage: FC<Props> = ({ children, bg, onBlack = true, fadeInScene, fadeout }) => {

    return (
        <div 
            className={"bg-cover bg-center text-center w-full" + (onBlack ? " bg-black text-white" : " bg-white text-black") + (fadeInScene ? " fade-in-scene" : "")}
            style={{ backgroundImage: `url('/pages/${bg}')` }}>
            <div className={"flex flex-col items-center justify-center h-screen w-full font-season" + (fadeout ? " fade-out" : "")}
                
            >
                {children}
            </div>
        </div>
    )
}

export default BlankPage