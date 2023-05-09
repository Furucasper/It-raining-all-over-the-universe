import { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Props {
    changeSound?: () => void;
    changeSecondSound?: () => void;
    changeSFX?: () => void;
}

const DescribeYourself: FC<Props> = ({ changeSound, changeSecondSound, changeSFX }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [fadeout, setFadeout] = useState(false)

    const nextPage = () => {
        if (inputRef.current?.value) {
            toast.dismiss()
            setFadeout(true)
            changeSound && changeSound()
            changeSecondSound && changeSecondSound()
            changeSFX && changeSFX()
            setTimeout(() => {
                navigate("/how-much-you-have-learn")
            }, 1500)
        } else {
            toast.error("กรุณาตอบคำถาม")
            inputRef.current?.focus()
        }
    };


    useEffect(() => {
        inputRef.current?.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                nextPage();
            }
        });
    }, []);

    return (
        <div className="bg-white">
            <div className={"flex justify-center font-season" + (fadeout ? " fade-out" : "")}>
                <div
                    className="w-full  text-center h-screen flex bg-cover bg-center"
                    style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
                >
                    <div className="m-auto fade-in pt-[12rem]">
                        <p className="text-lg/relaxed">
                            ก่อนจะจากกันไป ช่วยบอก<br/>
                            <b>คำสั้น ๆ ที่อธิบายตัวตนของคุณได้ดีที่สุด</b><br/>
                            อีกครั้งหน่อยสิ
                        </p>
                        <div>
                            <input
                                type="text"
                                className="mt-3.5"
                                autoComplete="off"
                                ref={inputRef}
                            />
                            <br />
                            <button type="button" className="text-bold text-lg cursor-pointer mt-4 px-4 py-1" onClick={nextPage}>
                                <b>&gt; ต่อไป &lt;</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescribeYourself;
