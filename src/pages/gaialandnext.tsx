import { FC, useState } from 'react'
import BlankPage from './blankpage'
import { useNavigate } from 'react-router-dom'

interface Props {
    changeSound?: () => void;
    changeSecondSound?: () => void;
    changeSFX?: () => void;
  }

const GaiaLandNext: FC<Props> = ({ changeSound, changeSecondSound, changeSFX }) => {

    const [fadeout, setFadeout] = useState(false)
    const navigate = useNavigate()

    const nextPage = () => {
        setFadeout(true)
        changeSound && changeSound();
        changeSecondSound && changeSecondSound();
        changeSFX && changeSFX();
        setTimeout(() => {
            navigate('/your-star')
        }, 1500)
    }

    return (
        <div onClick={nextPage}>
            <BlankPage bg='plain-space.gif' fadeout={fadeout}>
                <img className='zoom-out-150 pointer-events-none' src='/images/moon.png' alt='gaia-star' />
                <div className='[&>p]:text-lg/loose overlay fade-in'>
                    <p className='text-black'>และคุณก็รู้ว่าที่นี่ไม่ใช่ดาวของคุณ</p>
                </div>
            </BlankPage>
        </div>
    )
}

export default GaiaLandNext