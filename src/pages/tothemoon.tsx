import { FC } from "react";
import Curtain from "./curtain";
import BlankPage from "./blankpage";

interface Props {
    path?: string
}

const ToTheMoon: FC<Props> = ({ path }) => {
    return (
        <Curtain path={ path || '/moon'} isClosing={false}>
            <BlankPage bg='plain-space.gif'>
                <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon'/>
            </BlankPage>
        </Curtain>
    )
}

export default ToTheMoon