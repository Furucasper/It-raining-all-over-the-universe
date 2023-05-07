import { FC, useEffect, useState } from 'react'

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string
    bgVideo?: string
    onBlack?: boolean;
    fadeInScene?: boolean;
    fadeout?: boolean;
    fadeoutDelay?: number;
    fadeoutOnClicked?: boolean;
}

const BlankPage: FC<Props> = ({ children, bg, bgVideo, onBlack = true, fadeInScene, fadeout: fadeOut, fadeoutDelay, fadeoutOnClicked }) => {

    const [fadeout, setFadeout] = useState(false)

    const handleClick = () => {
        if (fadeoutOnClicked) {
            setFadeout(true)
        }
    }

    useEffect(() => {
        if (fadeoutDelay) {
            setTimeout(() => {
                setFadeout(true)
            }, fadeoutDelay)
        }
    }, [])

    return (
        <div 
            className={"bg-cover bg-center text-center w-full" + (onBlack ? " bg-black text-white" : " bg-white text-black") + (fadeInScene ? " fade-in-scene" : "")}
            style={{ backgroundImage: `url('/pages/${bg}')` }}
            onClick={handleClick}>
            {bgVideo && <video className="z-[0] object-cover absolute w-full h-full" autoPlay loop muted playsInline>
                <source src={`/pages/${bgVideo}`} type="video/mp4" />
            </video>}
            <div className={"flex flex-col items-center justify-center h-screen w-full font-season z-1" + ((fadeout || fadeOut) ? " fade-out" : "")} >
                {children}
            </div>
        </div>
    )
}

export default BlankPage