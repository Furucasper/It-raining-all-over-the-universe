import { FC, useEffect, useState } from 'react'
import BlankPage from './blankpage'
import StarCheckbox from '../StarCheckbox'
import { useNavigate } from 'react-router-dom';

interface Props {
    children: string | JSX.Element | JSX.Element[];
    path: string;
    localStorageKey?: string;
    playBtnClickSFX: () => void;
}

const DefineYourself: FC<Props> = ({ children, path, localStorageKey, playBtnClickSFX }) => {

    const choice = [
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
        console.log(selected)
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
                    choice.map((item, index) => (
                        <StarCheckbox id={index} key={item} handleChange={handleCheckboxChange}>{item}</StarCheckbox>
                    ))
                }
            </div>

            <div className="text-bold text-lg cursor-pointer fade-in" onClick={nextPage}>
                <b>&gt; ต่อไป &lt;</b>
            </div>
        </BlankPage>
    )
}

export default DefineYourself