import { FC, useEffect } from "react"
import BlankPage from "./blankpage"
import { useNavigate } from "react-router-dom"

interface Props {
    moon: string
    name: string
    children: string | JSX.Element | JSX.Element[]
    localstorageKey: string
}

const Souvenir: FC<Props> = ({ moon, name, children, localstorageKey }) => {

    const userName = localStorage.getItem('name')
    const souvenir = localStorage.getItem('souvenir')
    const navigate = useNavigate()

    useEffect(() => {
        if (souvenir !== localstorageKey) {
            navigate('/join-the-Nitade-Showcase')
        }
    }, [])


    return (
        <BlankPage bg="plain-space.gif" fadeInScene>
            <img src="/images/logo-white.png" alt="" className="w-1/3 min-w-[4rem] max-w-[6rem] rounded-lg mb-4" />
            <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-[12px] text-black py-5 px-4 relative w-[18rem] max-w-[90%]">
                <p className="text-[18px]">
                    <b>{name}</b>
                </p>
                <img src={`/images/${moon}`} alt="souvenir" className="w-1/3 min-w-[4rem] rounded-lg py-1" />
                {children}
                {userName && <p className="text-base text-zinc-500 pt-2"><i>a gift for "{userName}"</i></p>}
            </div>
            <p className="text-xl mt-4 pb-12">#MakeItRainProject</p>
            <a href="https://instagram.com/itsrainingallovertheuniverse" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full hover:bg-zinc-800 pl-4 pr-3 py-1 text-lg cursor-pointer flex gap-1 items-center absolute z-0 bottom-4">
                More information
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="32px" height="32px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
            </a>

        </BlankPage>
    )
}

export default Souvenir