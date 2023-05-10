import { useEffect, useState } from 'react'
import Curtain from './curtain'
import BlankPage from './blankpage'
import { Helmet } from 'react-helmet'

const ExploreYourself = () => {

    const firstDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-7s'>
            <p className='fade-in'>งั้นเราลองมาสำรวจตัวเองเพิ่มเติมกันดีกว่า...</p>
            <p className='fade-in ani-delay-3s'>แต่มันต้องพึ่งจินตนาการนิดหน่อยนะ</p>
        </div>
    )

    const secondDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-11s'>
            <p className='fade-in ani-delay-8s'>ตอนนี้คุณกำลังถูกดึงเข้าสู่ห้วงมิติบางอย่าง...</p>
        </div>
    )

    const thirdDiv = (
        <div className='[&>p]:text-lg/loose'>
            <p className='fade-in ani-delay-12s'>ภาพตรงหน้าของคุณค่อย ๆ มืดดับลงเรื่อย ๆ</p>
        </div>
    )
    
    const [div, setDiv] = useState(firstDiv)

    useEffect(() => {
        setTimeout(() => {
            setDiv(secondDiv)
            setTimeout(() => {
                setDiv(thirdDiv)
            }, 4000)
        }, 8000)
    }, [])

    return (
        <Curtain path='/imagine' duration={16}>
            <Helmet>
                <link rel='prefetch' href='/sounds/galaxy.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/sfx-twinkling-stars.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel='prefetch' href='/sounds/star-ambience.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/moon.png" as="image" type="image/png" crossOrigin="anonymous" />
            </Helmet>
            <BlankPage onBlack={false}>
                {div}
            </BlankPage>
        </Curtain>
    )
}

export default ExploreYourself