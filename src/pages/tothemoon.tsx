import { FC } from "react";
import Curtain from "./curtain";
import BlankPage from "./blankpage";

const ToTheMoon: FC = () => {
    return (
        <Curtain path='/moon' isClosing={false}>
            <BlankPage bg='plain-space.gif'>
                <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon'/>
            </BlankPage>
        </Curtain>
    )
}

export default ToTheMoon