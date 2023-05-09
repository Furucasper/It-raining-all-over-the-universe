import { FC, useEffect } from "react";
import Curtain from "./curtain";
import BlankPage from "./blankpage";
import { Helmet } from "react-helmet";

interface Props {
    allPlayerFadeOut: (time: number, delay?: number) => void;
}

const OutOfTheUniverse: FC<Props> = ({ allPlayerFadeOut }) => {

    useEffect(() => {
        allPlayerFadeOut(6000, 1000)
    }, [])

    return (
        <Curtain path='/last-darkness' duration={8}>
            <Helmet>
                <link rel="prefetch" href="/images/new-moon.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/crescent-moon.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/quarter-moon.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/gibbous-moon.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/full-moon.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-gift-1.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-gift-2.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-gift-3.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-gift-4.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
            </Helmet>
            <div>
                <BlankPage bg='plain-space.gif'>
                    <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
                </BlankPage>
            </div>
        </Curtain>
    )
}

export default OutOfTheUniverse