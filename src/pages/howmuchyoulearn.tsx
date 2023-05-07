import { FC, useState } from "react";
import BlankPage from "./blankpage";
import { useNavigate } from "react-router-dom";

interface Props {
    playBtnClickSFX: () => void
}

const HowMuchYouLearn: FC<Props> = ({ playBtnClickSFX }) => {

    const navigate = useNavigate()
    const [fadeout, setFadeout] = useState(false)

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        localStorage.setItem('souvenir', e.currentTarget.value)
        setFadeout(true)
        playBtnClickSFX()
        setTimeout(() => {
            navigate('/before-we-part')
        }, 1500)
    }

    return (
        <div className="bg-white">
            <BlankPage onBlack={false} fadeInScene fadeout={fadeout}>
                <p className='text-lg/loose text-center'>
                    วันนี้คุณได้เรียนรู้เกี่ยวกับตัวเอง<br />
                    มากขึ้นแค่ไหน?
                </p>
                <div className='flex flex-col justify-center items-center gap-4 mt-6'>
                    <button type="button" className='btn-primary' onClick={handleOnClick} value={'1'}>ไม่เลย</button>
                    <button type="button" className='btn-primary' onClick={handleOnClick} value={'2'}>เล็กน้อย</button>
                    <button type="button" className='btn-primary' onClick={handleOnClick} value={'3'}>ปานกลาง</button>
                    <button type="button" className='btn-primary' onClick={handleOnClick} value={'4'}>ค่อนข้างมาก</button>
                    <button type="button" className='btn-primary' onClick={handleOnClick} value={'5'}>มาก</button>
                </div>
            </BlankPage>
        </div>
    )
}

export default HowMuchYouLearn
