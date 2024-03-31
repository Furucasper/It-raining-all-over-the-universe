import { FC, useEffect } from 'react'
import Curtain from './curtain';
import BlankPage from './blankpage';
import { Helmet } from 'react-helmet';

interface Props {
    allPlayerFadeOut: (time: number, delay?: number) => void;
}

const ItsDarkAgain: FC<Props> = ({ allPlayerFadeOut }) => {

    useEffect(() => {
        allPlayerFadeOut(6000, 1000)
    }, [])

    return (
        <Curtain path='/darkness3' duration={8}>
            <Helmet>
                <link rel='prefetch' href='/sounds/shining-planet.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel="prefetch" href="/pages/glowing-moon.mp4" as="video" type="video/mpeg" crossOrigin="anonymous" />
                <link rel="prefetch" href="/pages/glowing-moon-fadeout.mp4" as="video" type="video/mpeg" crossOrigin="anonymous" />
            </Helmet>
            <BlankPage bg='plain-space.gif'>
                <div className='[&>p]:text-lg/relaxed overlay'>
                    <p className='fade-in ani-delay-3s text-black'>
                        อีกครั้งหนึ่งที่ภาพตรงหน้า <br />
                        ของคุณเริ่มมืดดับลง
                    </p>
                </div>
                <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
        </Curtain>
    )
}

export default ItsDarkAgain