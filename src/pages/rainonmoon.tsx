import { FC, useEffect } from "react";
import BlankPage from "./blankpage";
import { useNavigate } from "react-router-dom";

interface Props {
    changeSound?: () => void;
    changeSecondSound?: () => void;
    changeSFX?: () => void;
  }
  

const RainOnMoon: FC<Props> = ({ changeSecondSound }) => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/recall')
        }, 10000)
        setTimeout(() => {
            changeSecondSound && changeSecondSound()
        }, 5000)
    }, [])

    return (
        <BlankPage bg='plain-space.gif'>
            <img className='pointer-events-none scale-[0.75] fade-in ani-delay-4s overlay' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            <img className='pointer-events-none zoom-out-63' src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
}

export default RainOnMoon