import { FC, useState } from 'react'

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string
    bgVideo?: string
    onBlack?: boolean;
    fadeInScene?: boolean;
    fadeout?: boolean;
    fadeoutOnClicked?: boolean;
}

const BlankPage: FC<Props> = ({ children, bg, bgVideo, onBlack = true, fadeInScene, fadeout: fadeOut, fadeoutOnClicked }) => {

    const [fadeout, setFadeout] = useState(fadeOut || false)

    const handleClick = () => {
        if (fadeoutOnClicked) {
            console.log('fadeout')
            setFadeout(true)
        }
    }

    return (
        <div 
            className={"bg-cover bg-center text-center w-full" + (onBlack ? " bg-black text-white" : " bg-white text-black") + (fadeInScene ? " fade-in-scene" : "")}
            style={{ backgroundImage: `url('/pages/${bg}')` }}
            onClick={handleClick}>
            {bgVideo && <video className="z-[0] object-cover absolute w-full h-full" autoPlay loop muted playsInline>
                <source src={`/pages/${bgVideo}`} type="video/mp4" />
            </video>}
            <div className={"flex flex-col items-center justify-center h-screen w-full font-season z-1" + (fadeout ? " fade-out" : "")} >
                {children}
            </div>
        </div>
    )
}

export default BlankPage