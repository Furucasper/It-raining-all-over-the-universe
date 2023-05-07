import { FC } from "react"
import BlankPage from "./blankpage"

interface Props {
    moon: string
    name: string
    children: string | JSX.Element | JSX.Element[]
}

const Souvenir: FC<Props> = ({ moon, name, children }) => {

    return (
        <BlankPage bg="plain-space.gif" fadeInScene>
            <img src="/images/logo-white.png" alt="" className="w-1/3 min-w-[4rem] max-w-[6rem] rounded-lg mb-8" />
            <div className="flex flex-col gap-4 justify-center items-center bg-white rounded-lg text-black py-8 px-4 relative fade-in ani-delay-500ms w-[18rem] max-w-[90%]">
                <img src={`/images/${moon}`} alt="souvenir" className="w-1/3 min-w-[4rem] rounded-lg" />
                <p className="text-xl">
                    <b>{name}</b>
                </p>
                {children}
            </div>
            <p className="text-xl mt-4 pb-12">#Makeitrainproject</p>
            <a href="https://instagram.com/itsrainingallovertheuniverse" target="_blank" className="text-lg mt-6 cursor-pointer flex gap-1 items-center absolute bottom-5">
                More information   
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="32px" height="32px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
            </a>

        </BlankPage>
    )
}

export default Souvenir