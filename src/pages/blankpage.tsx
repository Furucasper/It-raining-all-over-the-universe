import { FC, useEffect } from 'react'

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string
    onBlack?: boolean;
    fadeInScene?: boolean;
    playSound?: () => void;
    playSecondSound?: () => void;
    playSFX?: () => void;
}

const BlankPage: FC<Props> = ({ children, bg, onBlack = true, fadeInScene, playSound, playSecondSound, playSFX }) => {

    useEffect(() => {
        playSound && playSound()
        playSecondSound && playSecondSound()
        playSFX && playSFX()
    }, [])
    
    return (
        <div className={"flex flex-col items-center justify-center h-screen w-full font-season flex bg-cover bg-center text-center " + (onBlack ? "bg-black text-white" : "bg-white text-black") + (fadeInScene ? " fade-in-scene" : "")}
            style={{ backgroundImage: `url('/pages/${bg}')` }}
        >
            {children}
        </div>
    )
}

export default BlankPage