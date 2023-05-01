import { FC, useEffect, useState } from 'react'
import Curtain from './curtain'
import BlankPage from './blankpage'
import { Helmet } from 'react-helmet'

const ExploreYourself = () => {

    const firstDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-10s'>
            <p className='fade-in'>งั้นเราลองมาสำรวจตัวเองเพิ่มเติม</p>
            <p className='fade-in ani-delay-3s'>กันดีกว่า...</p>
            <p className='fade-in ani-delay-6s'>แต่มันต้องพึ่งจินตนาการนิดหน่อยนะ</p>
        </div>
    )

    const secondDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-16s'>
            <p className='fade-in ani-delay-12s'>เราอยากให้คุณลองจินตนาการดู</p>
        </div>
    )

    const thirdDiv = (
        <div className='[&>p]:text-lg/loose'>
            <p className='fade-in ani-delay-17s'>จินตนาการว่า...</p>
        </div>
    )
    
    const [div, setDiv] = useState(firstDiv)

    useEffect(() => {
        setTimeout(() => {
            setDiv(secondDiv)
            setTimeout(() => {
                setDiv(thirdDiv)
            }, 6000)
        }, 11500)
    }, [])

    return (
        <Curtain path='/darkness'>
            <Helmet>
                <link rel='prefetch' href='/sounds/galaxy.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-twinkling-stars.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/moon.png" as="image" type="image/png" crossOrigin="anonymous" />
            </Helmet>
            <BlankPage onBlack={false}>
                {div}
            </BlankPage>
        </Curtain>
    )
}

export default ExploreYourself