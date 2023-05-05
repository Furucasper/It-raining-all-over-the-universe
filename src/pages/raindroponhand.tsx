import { FC } from 'react';
import BlankPage from './blankpage';
import Nav from './nav';

interface Props {
  changeSound?: () => void;
  changeSecondSound?: () => void;
  changeSFX?: () => void;
}

const RaindropOnHand: FC<Props> = () => {

    return (
        <Nav path='/rain-on-moon'>
            <BlankPage bg='plain-space.gif'>
                <div className='[&>p]:text-xl/relaxed overlay top-[16%] ani-delay-2s fade-in'>
                    <p className='text-black'>
                        ทันใดนั้น คุณสัมผัสได้ถึงหยดน้ำ <br />
                        ที่หยดลงมาบนมือของคุณ
                    </p>
                </div>
                <img className='pointer-events-none overlay p-12 ani-delay-3s fade-in' src='/pages/raindrop-on-hand-no-bg.gif' alt='hand' />
                <img className='pointer-events-none zoom-in-225' src='/images/moon.png' alt='moon' />
            </BlankPage>
        </Nav>
    )
}

export default RaindropOnHand