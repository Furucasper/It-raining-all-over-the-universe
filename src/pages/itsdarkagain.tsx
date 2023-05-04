import { FC, useEffect } from 'react'
import Curtain from './curtain';
import BlankPage from './blankpage';

interface Props {
    allPlayerFadeOut: (time: number) => void;
}

const ItsDarkAgain: FC<Props> = ({ allPlayerFadeOut }) => {

    useEffect(() => {
        allPlayerFadeOut(30000)
    }, [])

    return (
        <Curtain path='/darkness3'>
            <BlankPage bg='plain-space.gif'>
                <div className='[&>p]:text-lg/loose fade-out ani-delay-16s overlay'>
                    <p className='fade-in ani-delay-6s text-black'>
                        อีกครั้งหนึ่งที่ภาพตรงหน้า <br />
                        ของคุณเริ่มมืดดับลง
                    </p>
                </div>
                <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon' />
            </BlankPage>
        </Curtain>
    )
}

export default ItsDarkAgain