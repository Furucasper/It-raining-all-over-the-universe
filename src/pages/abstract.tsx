import { FC, useEffect, useRef, useState } from 'react'
import BlankPage from './blankpage'
import { useNavigate } from 'react-router-dom'

const Abstract: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const [fadeout, setFadeout] = useState(false)
    const nextPage = () => {
        if (inputRef.current?.value) {
            setFadeout(true)
            setTimeout(() => {
                navigate('/reflect-something')
            }, 1000)
        } else {
            alert('กรุณาตอบคำถาม')
            inputRef.current?.focus()
        }
    }

    useEffect(() => {
        inputRef.current?.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                nextPage();
            }
        });
    }, []);

    return (
        <BlankPage bg='plain-space.gif'>
            <div className={'[&>p]:text-lg/loose fade-in px-4' + (fadeout ? ' fade-out' : '')}>
                <p className='py-2'>ลองสังเกตภาพนี้ดูสิ</p>
                <img className='rounded' src='/images/abstract.jpg' alt='moon-glowing' />
                <p className='py-6'>
                    คุณเห็นอะไรในภาพนี้บ้างหรอ?<br />
                    จะเป็น<b>ความรู้สึก ประสบการณ์ การตีความ<br />
                        หรืออะไรที่คุณนึกออก</b>เลยก็ได้นะ
                </p>
                <div className='px-4'>
                    <input className='max-w-md' type='text' autoComplete="off" ref={inputRef} />
                </div>
                <button type="button" className="text-xl cursor-pointer mt-8" onClick={nextPage}>
                    <b>&gt; ต่อไป &lt;</b>
                </button>
            </div>
        </BlankPage>
    )
}

export default Abstract