import { FC, useEffect } from 'react';
import BlankPage from './blankpage';
import { useNavigate } from 'react-router-dom';

const GlowingMoonFadeOut: FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/new-star')
        }, 4000)
    }, []);

    return (
        <BlankPage bgVideo='glowing-moon-fadeout.mp4'>
            <div className='[&>p]:text-lg/relaxed absolute z-10 top-[16%] ani-delay-500ms fade-in'>
                <p className='fade-out ani-delay-3s'>
                    คุณเริ่มเห็นดาวดวงใหม่ปรากฎขึ้น
                </p>
            </div>
            {/* <video className="fade-out ani-delay-3s z-[1] object-cover absolute w-full h-full" muted playsInline autoPlay>
                <source src={"/pages/glowing-moon-fadeout.mp4"} type="video/mp4" />
            </video> */}
            {/* <img className='overlay fade-out ani-delay-2s' src='/pages/glowing-moon-fadeout.gif' alt='moon-glowing' /> */}
            <img className='pointer-events-none scale-[0.85] fade-in ani-delay-4s' src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
}

export default GlowingMoonFadeOut
