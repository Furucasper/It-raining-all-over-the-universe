import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    changeSFX: (src: string, volume?: number) => void
}

const NitadeShowcase: FC<Props> = ({ changeSFX }) => {

    const navigate = useNavigate()
    const nextPage = () => {
        const souvenir = localStorage.getItem('souvenir')
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
            default:
                navigate('/new-moon-souvenir')
        }
    }

    return (
        <div className="bg-white w-full text-center h-screen flex bg-contain bg-no-repeat bg-center font-season"
            style={{ backgroundImage: "url('/pages/1.gif')" }}
            onClick={nextPage}
        >
            <div className=" w-full flex flex-col justify-center items-center  fade-in">
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
            </div>
        </div>
    )
}

export default NitadeShowcase
