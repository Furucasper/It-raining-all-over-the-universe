import { FC, useEffect, useRef, useState } from 'react';
import BlankPage from './blankpage';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GlowingMoon: FC = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
            setTimeout(() => {
                navigate('/glowing-moon-fadeout')
            }, 5000)
        }, 2500)
    }, [])

    return (
        <BlankPage bg='plain-space.gif'>
            <Helmet>
                <link rel="prefetch" href="/pages/glowing-moon.gif" as="image" type="image/gif" crossOrigin="anonymous" />
                <link rel="prefetch" href="/pages/glowing-moon-fadeout.gif" as="image" type="image/gif" crossOrigin="anonymous" />
                <link rel="prefetch" href="/images/abstract.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
            </Helmet>
            <div className='[&>p]:text-lg/relaxed absolute z-20 top-[16%] fade-in'>
                <p className='fade-out ani-delay-3s'>
                    ทันใดนั้น ดวงจันทร์ก็เกิดแสงสว่างขึ้น
                </p>
            </div>
            <div className='[&>p]:text-lg/relaxed absolute z-20 top-[16%] ani-delay-4s fade-in'>
                <p className='fade-out ani-delay-5s'>
                    แสงสว่างจ้าขึ้นเรื่อย ๆ
                </p>
            </div>
            <div className='[&>p]:text-xl/relaxed z-20 ani-delay-6s fade-in'>
                <p className='fade-out ani-delay-8s text-black'>
                    ....
                </p>
            </div>
            <img className='pointer-events-none scale-[0.85] z-1 absolute fade-in ani-delay-13s' src='/images/moon.png' alt='moon' />
            <>{show && <img className='overlay fade-in' src='/pages/glowing-moon.gif' alt='moon-glowing' />}</>
            <img className='ani-delay-4s fade-out overlay pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
}

export default GlowingMoon
