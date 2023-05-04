import { FC } from "react";
import BlankPage from "./blankpage";
import Nav from "./nav";
import StarCheckbox from "../StarCheckbox";

const ThinkOfOthers: FC = () => {

    const answers: string[] = localStorage.getItem('others-define-you') ? JSON.parse(localStorage.getItem('others-define-you')!) : []

    return (
        <Nav path='/not-me' delay={1000}>
            <BlankPage bg='plain-space.gif' fadeoutOnClicked>
                <p className='text-lg fade-in fade-in ani-duration-500ms'>
                    ลองย้อนคิดกลับไปถึง<b>คำต่าง ๆ ที่<br />
                        คนรอบข้างอาจเคยนิยามให้คุณ</b>
                </p>
                <div className='grid grid-cols-2 py-5 gap-x-4 fade-in ani-delay-500ms'>
                    {
                        answers.map((item, index) => (
                            <StarCheckbox id={index} key={item} disabledAndChecked>{item}</StarCheckbox>
                        ))
                    }
                </div>
            </BlankPage>
        </Nav>
    )
}

export default ThinkOfOthers