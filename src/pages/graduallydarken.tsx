import { FC, RefObject, useEffect, useState } from 'react'
import Curtain from './curtain'
import BlankPage from './blankpage'
import { Helmet } from 'react-helmet';

interface Props {
    allPlayerFadeOut: (time: number, delay?: number) => void;
  }

const GraduallyDarken: FC<Props> = ({ allPlayerFadeOut }) => {

    const firstDiv = (
        <div className='fade-out ani-delay-3s'>
            <p className='text-xl fade-in'>.....</p>
        </div>
    )

    const secondDiv = (
        <div className='[&>p]:text-lg/loose fade-out ani-delay-9s'>
            <p className='text-xl fade-in ani-delay-4s'>อยู่ ๆ บรรยากาศรอบตัว<br />ของคุณก็ค่อย ๆ มืดลง</p>
        </div>
    )

    const thirdDiv = (
        <div className='[&>p]:text-lg/loose'>
            <p className='text-xl fade-in ani-delay-10s'>ค่อย ๆ มืดลง</p>
        </div>
    )

    const [div, setDiv] = useState(firstDiv)

    useEffect(() => {
        setTimeout(() => {
            setDiv(secondDiv)
            setTimeout(() => {
                setDiv(thirdDiv)
            }, 6000)
        }, 4000)
        allPlayerFadeOut(10000, 3000)   
    }, [])

    return (
        <Curtain path='/darkness' duration={14}>
            <BlankPage bg='plain-space.gif'>
                {div}
            </BlankPage>
        </Curtain>
    )
}

export default GraduallyDarken