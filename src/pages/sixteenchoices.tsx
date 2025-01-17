import { FC, useState } from 'react'
import BlankPage from './blankpage'
import StarCheckbox from '../StarCheckbox'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface Props {
    children: string | JSX.Element | JSX.Element[];
    path: string;
    localStorageKey?: string;
    choiceKey?: string;
    skipable?: boolean;
    playBtnClickSFX: () => void;
}

const DefineYourself: FC<Props> = ({ children, path, localStorageKey, choiceKey, skipable, playBtnClickSFX }) => {

    const choices: string[] = (choiceKey && localStorage.getItem(choiceKey)) ? JSON.parse(localStorage.getItem(choiceKey)!) : [
        'กล้าแสดงออก',
        'เป็นผู้ฟังที่ดี',
        'ดื้อรั้น',
        'อ่อนไหว',
        'มั่นใจ',
        'ช่างพูด',
        'ซับซ้อน',
        'หุนหันพลันแล่น',
        'ใจดี',
        'ฉลาด',
        'เห็นอกเห็นใจ',
        'ขี้อาย',
        'ยืดหยุ่น',
        'อบอุ่น',
        'เงียบ',
        'เจ้าระเบียบ'
    ]

    const [selected, setSelected] = useState<string[]>([])
    const [fadeOut, setFadeOut] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            playBtnClickSFX()
            setSelected([...selected, e.target.value])
        }
        else {
            setSelected(selected.filter(item => item !== e.target.value))
        }
    }

    const nextPage = () => {
        if (!skipable && selected.length === 0) {
            toast.error('กรุณาเลือกอย่างน้อย 1 ข้อ')
            return
        }
        toast.dismiss();
        setFadeOut(true)
        localStorageKey && localStorage.setItem(localStorageKey, JSON.stringify(selected))
        setTimeout(() => {
            navigate(path)
        }, 1000)
    }

    return (
        <BlankPage bg='plain-space.gif' fadeout={fadeOut}>
            <>{children}</>

            <div className='grid grid-cols-2 py-5 gap-x-4 fade-in ani-delay-500ms'>
                {
                    choices.map((item, index) => (
                        <StarCheckbox id={index} key={item} handleChange={handleCheckboxChange}>{item}</StarCheckbox>
                    ))
                }
            </div>

            <button type="button" className="text-bold cursor-pointer fade-in" onClick={nextPage}>
                <b>&gt; ต่อไป &lt;</b>
            </button>
        </BlankPage>
    )
}

export default DefineYourself