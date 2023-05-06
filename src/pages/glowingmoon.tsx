import { FC, useEffect, useRef } from 'react';
import BlankPage from './blankpage';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GlowingMoon: FC = () => {

    const navigate = useNavigate()
    const videoPlayer = useRef<HTMLVideoElement>(null);
    const videoPlayer2 = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        //adjest video speed to 0.75
        if (videoPlayer.current) {
            videoPlayer.current.playbackRate = 0.75;
            setTimeout(() => {
                videoPlayer.current?.play()
            }, 3000)
        }
        if (videoPlayer2.current) {
            setTimeout(() => {
                videoPlayer2.current?.play()
            }, 10000)
            videoPlayer2.current.addEventListener('ended', () => {
                setTimeout(() => {
                    navigate('/new-star')
                }, 2000)
            })
        }
    }, []);

    return (
        <BlankPage bg='plain-space.gif'>
            <Helmet>
                <link rel="prefetch" href="/images/abstract.jpg" as="image" type="image/jpeg" crossOrigin="anonymous" />
            </Helmet>
            <div className='[&>p]:text-lg/relaxed absolute z-10 top-[16%] ani-delay-500ms fade-in'>
                <p className='fade-out ani-delay-4s'>
                    ทันใดนั้น ดวงจันทร์ก็เกิดแสงสว่างขึ้น
                </p>
            </div>
            <div className='[&>p]:text-lg/relaxed absolute z-10 top-[16%] ani-delay-5s fade-in'>
                <p className='fade-out ani-delay-6s'>
                    แสงสว่างจ้าขึ้นเรื่อย ๆ
                </p>
            </div>
            <div className='[&>p]:text-xl/relaxed z-10 ani-delay-8s fade-in'>
                <p className='fade-out ani-delay-10s text-black'>
                    ....
                </p>
            </div>
            <div className='[&>p]:text-lg/relaxed absolute z-10 top-[16%] ani-delay-11s fade-in'>
                <p className='fade-out ani-delay-14s'>
                    คุณเริ่มเห็นดาวดวงใหม่ปรากฎขึ้น
                </p>
            </div>
            <img className='pointer-events-none scale-[0.85] z-1 absolute fade-in ani-delay-13s' src='/images/moon.png' alt='moon' />
            <div className='absolute w-full h-full fade-out ani-delay-14s'>
                <video ref={videoPlayer} className="fade-in ani-delay-500ms z-[1] object-cover absolute w-full h-full" muted playsInline>
                    <source src={"/pages/glowing-moon.mp4"} type="video/mp4" />
                </video>
                <video ref={videoPlayer2} className="fade-in ani-delay-10s z-[2] object-cover absolute w-full h-full" muted playsInline>
                    <source src={"/pages/glowing-moon-fadeout.mp4"} type="video/mp4" />
                </video>
            </div>
            {/* <img className='overlay fade-in' src='/pages/glowing-moon.gif' alt='moon-glowing' /> */}
            <img className='ani-delay-1s fade-out overlay pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
}

export default GlowingMoon
