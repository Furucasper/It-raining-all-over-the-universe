import { FC } from 'react'
import Curtain from './curtain'
import BlankPage from './blankpage'

const GraduallyDarken: FC = () => {
    return (
        <BlankPage bg='plain-space.gif'>
            <div className='fade-in ani-delay-1s'>
                <p className='text-xl'>.....</p>
            </div>
        </BlankPage>
    )
}

export default GraduallyDarken