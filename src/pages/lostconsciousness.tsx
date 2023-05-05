import { FC, useEffect, useState } from "react";
import Curtain from "./curtain";
import BlankPage from "./blankpage";
import { Helmet } from "react-helmet";

interface Props {
    allPlayerFadeOut: (time: number, delay?: number) => void;
}

const LostConsciousness: FC<Props> = ({ allPlayerFadeOut }) => {

    const firstDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-6s fade-out overlay'>
            <p className='fade-in text-black'>
                แต่ดาวดวงนี้จะใช่ดาวของคุณ<br />
                จริง ๆ หรือเปล่านะ?
            </p>
        </div>
    )

    const secondDiv = (
        <div className='[&>p]:text-lg/loose overlay'>
            <p className='text-xl fade-in ani-delay-7s text-black'>
                ขณะนั้นเอง สติของคุณก็ค่อย ๆ<br />
                หลุดลอยไปอีกครั้ง
            </p>
        </div>
    )

    const [div, setDiv] = useState(firstDiv)

    useEffect(() => {
        setTimeout(() => {
            setDiv(secondDiv)
        }, 7000)
        allPlayerFadeOut(8000, 6000)
    }, [])

    return (
        <Curtain path='/darkness2' isFast>
            <Helmet>
                <link rel='prefetch' href='/sounds/raindrop.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel="prefetch" href="/pages/raindrop-no-bg.gif" as="image" type="image/gif" crossOrigin="anonymous" />
            </Helmet>
            <div className='blur-out ani-delay-11s'>
                <BlankPage bg='plain-space.gif'>
                    {div}
                    <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon' />
                </BlankPage>
            </div>
        </Curtain>
    )
}

export default LostConsciousness