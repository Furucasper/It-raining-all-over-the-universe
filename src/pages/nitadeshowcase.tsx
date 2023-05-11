import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    changeSFX: (src: string, volume?: number) => void
}

const NitadeShowcase: FC<Props> = ({ changeSFX }) => {

    const navigate = useNavigate()
    const souvenir = localStorage.getItem('souvenir')
    const nextPage = () => {
        switch (souvenir) {
            case '1':
                changeSFX('sounds/sfx-gift-1.mp3')
                navigate('/new-moon-souvenir')
                break;
            case '2':
                changeSFX('sounds/sfx-gift-2.mp3')
                navigate('/crescent-moon-souvenir')
                break;
            case '3':
                changeSFX('sounds/sfx-gift-3.mp3')
                navigate('/quarter-moon-souvenir')
                break;
            case '4':
                changeSFX('sounds/sfx-gift-4.mp3')
                navigate('/gibbous-moon-souvenir')
                break;
            case '5':
                changeSFX('sounds/sfx-gift-5.mp3')
                navigate('/full-moon-souvenir')
                break;
        }
    }

    return (
        <div className="bg-white w-full text-center h-screen flex bg-contain bg-no-repeat bg-center font-season"
            style={{ backgroundImage: "url('/pages/1.gif')" }}
        >
            <div className="pb-4 w-full flex flex-col justify-center items-center  fade-in">
                <div className="[&>p]:text-lg/relaxed">
                    <p>
                        มาร่วมค้นหาตัวตน<br />
                        ของคุณอีกครั้งกับ<br />
                    </p>
                    <p className="mt-2">
                        <b>
                            "Diary of Seasons"<br />
                            ณ งาน Nitade Showcase<br />
                            คณะนิเทศศาสตร์<br />
                            จุฬาลงกรณ์หาวิทยาลัย<br />
                            18-20 พฤษภาคม 2566<br />
                        </b>
                    </p>
                    <br />
                    <p>
                        แล้วเจอกันนะ
                    </p>
                </div>
                <div className="mt-8">
                    {
                        (souvenir && ['1', '2', '3', '4', '5'].includes(souvenir)) ? (
                            <button className="bg-white hover:bg-zinc-50 border-[1.5px] border-black/60 btn-dropshadow transition-all rounded-lg px-3 py-2 font-season text-base flex items-center gap-2"
                                onClick={nextPage}
                            >
                                <img src="/images/gift-box.png" alt="" className="w-[14px]" /> DISCOVER THE GIFT!
                            </button>
                        ) : (
                            <a href="https://instagram.com/itsrainingallovertheuniverse" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-zinc-100 rounded-full pl-4 pr-3 py-1 text-lg cursor-pointer flex gap-1 items-center">
                                More information
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="32px" height="32px" fill-rule="nonzero"><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NitadeShowcase