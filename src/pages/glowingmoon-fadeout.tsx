import { FC } from 'react'
import BlankPage from './blankpage'
import { useNavigate } from 'react-router-dom'

const GlowingMoonFadeOut: FC = () => {
    
    const navigate = useNavigate()
    setTimeout(() => {
        // navigate('')
        navigate('/new-star')
    }, 8000)

    return (
        <BlankPage bg='plain-space.gif'>
            <div className='[&>p]:text-xl/relaxed z-20'>
                <p className='fade-out ani-delay-1s text-black'>
                    ....
                </p>
            </div>
            <div className='[&>p]:text-lg/relaxed absolute z-20 top-[16%] ani-delay-3s fade-in'>
                <p className='fade-out ani-delay-7s'>
                    คุณเริ่มเห็นดาวดวงใหม่ปรากฎขึ้น
                </p>
            </div>
            <img className='overlay ani-delay-2500ms fade-out' src='/pages/glowing-moon-fadeout.gif' alt='moon-glowing' />
            <img className='ani-delay-2s fade-in overlay pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
}

export default GlowingMoonFadeOut