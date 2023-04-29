import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Beginning: FC = () => {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate("/warning");
        }, 6000);
    }, [])
    

    return(
        <div className='flex items-center justify-center h-screen fade-in-out-scene'>
            <img className='w-1/2' src="/images/logo.png" alt="logo" />
        </div>
    )
}

export default Beginning;