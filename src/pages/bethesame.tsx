import { FC, useEffect } from "react";
import Nav from "./nav";
import BlankPage from "./blankpage";
import StarCheckbox from "../StarCheckbox";
import { useNavigate } from "react-router-dom";

const BeTheSame: FC = () => {

    const othersAnswers: string[] = localStorage.getItem('others-define-you') ? JSON.parse(localStorage.getItem('others-define-you')!) : []
    const yourAnswers: string[] = localStorage.getItem('define-yourself') ? JSON.parse(localStorage.getItem('define-yourself')!) : []

    const sameAnswers: string[] = othersAnswers.filter(item => yourAnswers.includes(item))

    const navigate = useNavigate()

    useEffect(() => {
        if (sameAnswers.length === 0) {
            navigate('/not-know-before')
        }
    }, [])

    return (
        <Nav path='/you-and-others' delay={1000}>
            <BlankPage bg='plain-space.gif' fadeoutOnClicked>
                <div className='grid grid-cols-2 py-5 gap-x-4 fade-in ani-delay-500ms'>
                    {
                        sameAnswers.map((item, index) => (
                            <StarCheckbox id={index} key={item} disabledAndChecked>{item}</StarCheckbox>
                        ))
                    }
                </div>
            </BlankPage>
        </Nav>
    )
}

export default BeTheSame