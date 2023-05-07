import { FC } from "react";
import { useNavigate } from "react-router-dom";


const NitadeShowcase: FC = () => {

    const navigate = useNavigate()
    const nextPage = () => {
        const souvenir = localStorage.getItem('souvenir')
        switch (souvenir) {
            case '1':
                navigate('/new-moon-souvenir')
                break;
            case '2':
                navigate('/crescent-moon-souvenir')
                break;
            case '3':
                navigate('/quarter-moon-souvenir')
                break;
            case '4':
                navigate('/gibbous-moon-souvenir')
                break;
            case '5':
                navigate('/full-moon-souvenir')
                break;
            default:
                navigate('/new-moon-souvenir')
                break;
        }
    }

    return (
        <div className="bg-white w-full text-center h-screen flex bg-contain bg-no-repeat bg-center font-season"
            style={{ backgroundImage: "url('/pages/1.gif')" }}
            onClick={nextPage}
        >
            <div className=" w-full flex flex-col justify-center items-center  fade-in">
                <div className="[&>p]:text-lg">
                    <p>
                        มาร่วมค้นหาตัวตน<br />
                        ของคุณอีกครั้งกับ<br /><br />
                        <b>
                            "Diary of Seasons"<br />
                            ณ งาน Nitade Showcase<br />
                            คณะนิเทศศาสตร์<br />
                            จุฬาลงกรณ์หาวิทยาลัย<br />
                            18-20 พฤษภาคม 2566<br />
                        </b>
                    </p>
                    <br /><br />
                    <p>
                        แล้วเจอกันนะ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NitadeShowcase
