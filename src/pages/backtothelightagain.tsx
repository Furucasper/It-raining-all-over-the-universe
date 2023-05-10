import { FC } from "react";
import Curtain from "./curtain";
import Page from "./page";

const BackToTheLightAgain: FC = () => {
    return (
        <Curtain path='' isClosing={false} duration={10}>
            <Page bg='daytime-window.gif' onBlack={false}>
                <p className='mt-40 text-lg fade-in ani-delay-3s'>ขอบคุณที่มาร่วมเดินทางไปด้วยกันวันนี้นะ</p>
            </Page>
        </Curtain>
    )
}

export default BackToTheLightAgain