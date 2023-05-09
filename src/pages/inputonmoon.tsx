import { FC, useEffect, useRef, useState } from 'react';
import BlankPage from './blankpage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface Prop {
    children?: string | JSX.Element | JSX.Element[]
    path: string
}

const InputOnMoon: FC<Prop> = ({ children, path }) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const [isNextPage, setIsNextPage] = useState(false)

    const nextPage = () => {
        if (inputRef.current?.value) {
            toast.dismiss()
            setIsNextPage(true)
            setTimeout(() => {
                navigate(path)
            }, 2500)
        } else {
            toast.error("กรุณาตอบคำถาม")
        }
    };

    useEffect(() => {
        inputRef.current?.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault()
                nextPage()
            }
        });
    }, []);

    return (
        <BlankPage bg='plain-space.gif'>
            <div className={'[&>p]:text-lg/loose text-black overlay m-auto pb-48' + (isNextPage ? ' fade-out' : ' fade-in ani-delay-2s')}>
                {children}
                <input
                    name="howyoufeel"
                    type="text"
                    autoComplete="off"
                    className='text-center mt-5 bg-gray-300 focus:outline-4'
                    ref={inputRef}
                />
                <button type="button" className="text-xl cursor-pointer mt-5" onClick={nextPage}>
                    <b>&gt; ต่อไป &lt;</b>
                </button>
            </div>
            <img className={'pointer-events-none' + (isNextPage ? ' zoom-out-85' : ' zoom-in-150')} src='/images/moon.png' alt='moon' />
        </BlankPage>
    )
};

export default InputOnMoon;