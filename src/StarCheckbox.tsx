import { FC } from 'react'

interface Props {
    id?: number | string
    children?: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StarCheckbox: FC<Props> = ({ id, children, handleChange }) => {

    return (
        <label htmlFor={`check-choice-${id}`}>
            <div className='relative w-[17.6] h-[8vh] flex flex-wrap content-center'>
                <div className='btn-image overlay top-0 left-0 flex content-center'>
                    <span className='m-auto'>{children}</span>
                </div>
                <input type="checkbox" className="hidden peer" value={children || ""} id={`check-choice-${id}`} onChange={handleChange} />
                <div className='bg-gray-400 rounded-md w-[16.7vh] h-[4.5vh] peer-checked:bg-white'></div>
            </div>
        </label>
    )
}

export default StarCheckbox